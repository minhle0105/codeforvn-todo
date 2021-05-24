import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/task';
import {FormControl, FormGroup} from '@angular/forms';
import {TaskService} from '../../service/task.service';
import {ActivatedRoute} from '@angular/router';
import {PriorityService} from '../../service/priority.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task: Task = {};
  idToUpdate: number = -1;
  priorityLevels: string[] = [];

  taskForm = new FormGroup({
    description: new FormControl(),
  })

  constructor(private taskService: TaskService,
              private activatedRoute: ActivatedRoute,
              private priorityService: PriorityService,
              private snackBar: MatSnackBar) {
    // get the current url link
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // get the 'id' from current URL, assign the value to idToUpdate
      this.idToUpdate = +paramMap.get('id');
      // call the method to get all the current product info, assign the current info to the form so that the update form has the
      // current info
      this.getTaskById(this.idToUpdate);
    })
  }

  ngOnInit() {
    this.getAllPriorityLevels();
  }

  getAllPriorityLevels() {
    this.priorityLevels = this.priorityService.getAllPriority();
  }

  get id() {
    return this.taskForm.get('id');
  }

  openMessage() {
    this.snackBar.open("Task Successfully Updated!", 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  getTaskById(id: number) {
    this.taskService.getTaskById(id).subscribe(thisTask => {
      this.taskForm = new FormGroup( {
        description: new FormControl(thisTask.description),
        priorityLevel: new FormControl(thisTask.priorityLevel)
      })
    })
  };

  updateTaskInfo(id: number) {
    let newTask: Task = this.taskForm.value;
    this.taskService.updateTask(id, newTask).subscribe(() => {
      this.openMessage();
    }, error => {
      alert("Task cannot be updated");
      console.log(error)
    })
  }

}
