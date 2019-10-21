import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinestyle',
  templateUrl: './inlinestyle.component.html',
  styleUrls: ['./inlinestyle.component.css']
})
export class InlinestyleComponent  {

 public background;
 public textColor;
 public textAlign;
 public GetEffects(){
   const effects={
     'background-color' :this.background,
     'color':this.textColor,
     'text-align': this.textAlign
   }
   return effects;
   

 }

}
