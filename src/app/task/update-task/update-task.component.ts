import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task: Task = {};
  idToUpdate = -1;

  constructor() { }

  ngOnInit() {
  }

}
