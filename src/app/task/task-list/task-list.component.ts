import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from '../../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private taskService: TaskService) { }

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

}
