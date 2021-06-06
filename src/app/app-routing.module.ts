import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './components/task/task-list/task-list.component';
import {CreateTaskComponent} from './components/task/create-task/create-task.component';
import {UpdateTaskComponent} from './components/task/update-task/update-task.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
