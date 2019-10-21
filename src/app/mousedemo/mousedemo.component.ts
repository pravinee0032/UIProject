import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousedemo',
  templateUrl: './mousedemo.component.html',
  styleUrls: ['./mousedemo.component.css']
})
export class MousedemoComponent  {
  public styleObj;
  public traceMouse(event){
    this.styleObj={
      'position':'fixed',
      'top':event.clientY+'px',
      'left':event.clientX+'px'
    };
  }

  

}
