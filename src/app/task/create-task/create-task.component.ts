import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from '../../service/task.service';
import {PriorityService} from '../../service/priority.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = {
    priorityLevel: ''
  };

  priorityLeveList: string[] = [];

  constructor(private taskService: TaskService,
              private priorityService: PriorityService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAllPriorityLevels();
  }

  getAllPriorityLevels() {
    this.priorityLeveList = this.priorityService.getAllPriority();
  }

  openMessage() {
    this.snackBar.open("Task Successfully Updated!", 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  createNewTask(form: NgForm) {
    let newTask: Task = {
      description: form.value.description,
      priorityLevel: form.value.priorityLevel,
      completed: false
    };
    this.taskService.createNewTask(newTask).subscribe(() => {
      this.openMessage();
      form.reset();
    }, error => {
      alert("Task can not be created");
      console.log(error);
    })
  }

}

