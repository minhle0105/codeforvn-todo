import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() new_Task = new EventEmitter<Task>();

  priorityLeveList: string[] = [];

  constructor(private taskService: TaskService,
              private priorityService: PriorityService) {
  }

  ngOnInit() {
    this.getAllPriorityLevels();
  }

  getAllPriorityLevels() {
    this.priorityLeveList = this.priorityService.getAllPriority();
  }

  createNewTask(form: NgForm) {
    let newTask: Task = {
      description: form.value.description,
      priorityLevel: form.value.priorityLevel,
      completed: false
    };
    this.new_Task.emit(newTask);
    form.reset();
  }

}

