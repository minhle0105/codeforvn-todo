import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BackButtonDisableModule} from 'angular-disable-browser-back-button';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    DeleteDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatProgressBarModule,
        BackButtonDisableModule.forRoot({
            preserveScrollPosition: true
        }),
        MatIconModule
    ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
