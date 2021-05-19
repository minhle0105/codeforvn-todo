import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task/task-list/task-list.component';
import {CreateTaskComponent} from './task/create-task/create-task.component';
import {UpdateTaskComponent} from './task/update-task/update-task.component';


const routes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent
  },
  {
    path: 'tasks/create',
    component: CreateTaskComponent
  },
  {
    path: 'task/edit/:id',
    component: UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
