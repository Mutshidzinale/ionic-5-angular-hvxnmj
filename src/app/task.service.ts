import { Injectable } from '@angular/core';
import {Task} from './task';
@Injectable({
    providedIn: 'root'
})
export class TaskService {
    _taskList: Array<Task> = [{Id:1,content:"Prepare project scope", status:"In progress",priority:"High"},
    {Id:2,content:"Prepare project budget", status:"In progress",priority:"High"},
    {Id:3,content:"Review project scope", status:"On Hold",priority:"Medium"},
    {Id:4,content:"Impliment project", status:"On Hold",priority:"Hight"}
    ]
  constructor() { }

  getAllTask() {
    return this._taskList;
  }

updateTask(task: Task){
  console.log(task.Id);
  
     const index = this._taskList.findIndex(c => c.Id === task.Id);
    // console.log(index);
     this._taskList[index] = task;

  }
deleteEmployee(id: number) {
     const emp = this._taskList.findIndex(c => c.Id == id);
     if (emp >-1) {
    this._taskList.splice(emp,1);

   }
 }
 addTask(task) {

   this._taskList.push(task);

 }
}