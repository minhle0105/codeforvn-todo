import {Component, Inject, OnInit} from '@angular/core';
import {Task} from '../../../model/task';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TaskService} from '../../../service/task.service';
import {ActivatedRoute} from '@angular/router';
import {PriorityService} from '../../../service/priority.service';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task: Task = {};
  idToUpdate: number = -1;
  priorityLevels: string[] = [];

  taskForm: FormGroup;

  constructor(private taskService: TaskService,
              private priorityService: PriorityService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getAllPriorityLevels();
    this.taskForm = this.formBuilder.group({
      id: [this.data.id],
      description: [this.data.description],
      priorityLevel: [this.data.priorityLevel]
    })
    this.idToUpdate = this.data.id;
  }

  getAllPriorityLevels() {
    this.priorityLevels = this.priorityService.getAllPriority();
  }

  get id() {
    return this.taskForm.get('id');
  }

  openSuccessMessage() {
    this.snackBar.open("Task Successfully Updated!", 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  openFailMessage() {
    this.snackBar.open("Task Cannot Be Updated!", 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }

  updateTaskInfo(id: number) {
    let newTask: Task = this.taskForm.value;
    this.taskService.updateTask(id, newTask).subscribe(() => {
      this.openSuccessMessage();
    }, error => {
      this.openFailMessage();
      console.log(error);
    })
  }

}
