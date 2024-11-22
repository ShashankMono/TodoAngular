import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDO-app';
  arr:string[]=[]

  getData(){
    this.arr.push(String(this.todoForm.value.todo))
    this.todoForm.reset()
  }
  
  todoForm= new FormGroup({
    todo:new FormControl
  })

  deleteItem(event:string){
    let index=this.arr.indexOf(event)
    if(index>=0){
      this.arr.splice(index,1)
    }
  }}
