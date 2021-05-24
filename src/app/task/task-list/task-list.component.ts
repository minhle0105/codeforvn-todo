import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from '../../service/task.service';
import {MatDialog, MatSnackBar, MatSort, MatTableDataSource, Sort} from '@angular/material';
import {DeleteDialogComponent} from '../../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  constructor(private taskService: TaskService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllTasks();
  }

  compare(a: number | string, b: number | string, isAsc: boolean, compareColumn: string) {
    if (compareColumn === 'description') {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    else {
      if ((a == "Low" && b == "Medium") || (a == "Low" && b == "Medium") || (a == "Medium" && b == "High")) {
        if (isAsc) {
          return 1;
        }
      }
      return -1;
    }
  }

  sortData(sort: Sort) {
    const data = this.taskList.slice();
    if (!sort.active || sort.direction === '') {
      this.taskList = data;
      return;
    }

    this.taskList = data.sort((a,b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'description':
          return this.compare(a.description, b.description, isAsc, 'description');
        case 'priorityLevel':
          return this.compare(a.priorityLevel, b.priorityLevel, isAsc, 'priorityLevel');
      }
    })
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.taskList = tasks;
    });
  };

  changeTaskStatus(i: number) {
    this.taskList[i].completed = !this.taskList[i].completed;
    this.taskService.updateTask(this.taskList[i].id, this.taskList[i]).subscribe(() => {
    }, error => {
      console.log(error);
    });
  }

  openMessage() {
    this.snackBar.open("Task Successfully Deleted!", 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  deleteTask(id: number) {
    const deleteDialog = this.dialog.open(DeleteDialogComponent, {
    });
    deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(id).subscribe(() => {
          this.openMessage();
          this.getAllTasks();
        }, error => {
          console.log(error)
        })
      }
    })

  }

}
