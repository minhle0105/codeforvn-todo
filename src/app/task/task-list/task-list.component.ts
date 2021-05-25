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
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      if (!tasks) {
        return;
      }
      this.taskList = tasks;
      this.completedTask = 0;
      this.updateTaskRender();
      this.dataSource = new MatTableDataSource(this.taskList);
      this.dataSource.sort = this.sort;
    });
  };

  changeTaskStatus(i: number) {
    let this_Task: Task = {};
    this.taskService.getTaskById(i).subscribe(
      (task) => {
        this_Task = task;
        this_Task.completed = !this_Task.completed;
        this.taskService.updateTask(i, this_Task).subscribe(() => {
          this.updateTaskRender();
          this.getAllTasks();
        });
      }
    );
  }

  updateTaskRender() {
    this.completedTask = 0;
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].completed) {
        this.completedTask += 1;
      }
    }
  }

  openMessage() {
    this.snackBar.open('Task Successfully Deleted!', 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  deleteTask(id: number) {
    const deleteDialog = this.dialog.open(DeleteDialogComponent, {});
    deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(id).subscribe(() => {
          this.openMessage();
          this.updateTaskRender();
          this.getAllTasks();
        }, error => {
          console.log(error);
        });
      }
    });

  }

}
