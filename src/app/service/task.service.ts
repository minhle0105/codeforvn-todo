import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../model/task';
import {environment} from '../../environments/environment';
// import {environment} from '../../environments/environment.prod';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API_URL}/tasks`);
  }

  createNewTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${API_URL}/tasks`, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${API_URL}/tasks/${id}`, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${API_URL}/tasks/${id}`);
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${API_URL}/tasks/${id}`);
  }


}
