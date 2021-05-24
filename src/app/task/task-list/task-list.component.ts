import {Component, OnInit, ViewChild} from '@angular/core';
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
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  taskList: Task[] = [];
  completedTask: number;
  displayedColumns = ['#', 'description', 'priorityLevel', 'actionUpdate', 'actionDelete'];
  constructor(private taskService: TaskService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllTasks();
    this.calculateCompletedTasks();
  }

  calculateCompletedTasks() {
    this.completedTask = 0;
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].completed) {
        this.completedTask += 1;
      }
    }
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      if (!tasks) {
        return;
      }
      this.taskList = tasks;
      this.dataSource = new MatTableDataSource(this.taskList);
      this.dataSource.sort = this.sort;

    });
  };

  changeTaskStatus(i: number) {
    this.taskList[i].completed = !this.taskList[i].completed;
    this.taskService.updateTask(this.taskList[i].id, this.taskList[i]).subscribe(() => {
      this.calculateCompletedTasks();
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
          this.calculateCompletedTasks();
          this.getAllTasks();
        }, error => {
          console.log(error)
        })
      }
    })

  }

}
