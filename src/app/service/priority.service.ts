import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PriorityService {
  priorityLevels: string[] = ['!!!', '!!', '!'];

  constructor() { }

  getAllPriority() {
    return this.priorityLevels;
  }
}
