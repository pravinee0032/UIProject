import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousedown',
  templateUrl: './mousedown.component.html',
  styleUrls: ['./mousedown.component.css']
})
export class MousedownComponent  {
public Ad='assets/tv.jpg';
public photo ='assets/photo.gif';
public  showAd1(){
  this.Ad='assets/photo.gif';
}
public showAd2(){
  this.Ad='assets/mobile.jpg';
}
  

}
