import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PriorityService {
  priorityLevels: string[] = ['High', 'Medium', 'Low'];

  constructor() { }

  getAllPriority() {
    return this.priorityLevels;
  }
}
