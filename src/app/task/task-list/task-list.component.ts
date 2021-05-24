import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from '../../service/task.service';
import {MatDialog} from '@angular/material';
import {DeleteDialogComponent} from '../../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  constructor(private taskService: TaskService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllTasks();
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

  deleteTask(id: number) {
    const deleteDialog = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: "Confirm Delete Task",
        message: "Are you sure you want to remove this task? This action cannot be undone"
      }
    });
    deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(id).subscribe(() => {
          this.getAllTasks();
        }, error => {
          console.log(error)
        })
      }
    })

  }

}
