import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task/task-list/task-list.component';
import {CreateTaskComponent} from './task/create-task/create-task.component';
import {UpdateTaskComponent} from './task/update-task/update-task.component';
import {DeleteDialogComponent} from './dialogs/delete-dialog/delete-dialog.component';


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
    path: 'tasks/edit/:id',
    component: UpdateTaskComponent
  },
  {
    path: 'tasks/dialog/:id',
    component: DeleteDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
