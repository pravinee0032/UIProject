import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent  {

  public userData=[
    {userName:'john'},
    {userName:'david'},
    {userName:'john12'},
    {userName:'john-nit'}
  ];
  public txtUserName;
  public msgUserName;
  public txtPassword;
  public msgPassword;
public CheckUser(){
  for(var i=0; i<this.userData.length; i++){
    if(this.userData[i].userName==this.txtUserName){
      this.msgUserName='User Name Taken Try Another';
      break;
    }
    else{
      this.msgUserName='User Name Availabe';
    }
  }
}
public CheckPassword(event){
  if(event.keyCode>=65 && event.keyCode<=90){
    this.msgPassword='Warning ! Caps ON';
  }
  else{
    this.msgPassword='';
  }
}
public LinkClicked(e){
  if(e.ctrlKey==true){
    location.href='http://www.google.com';
  }
  else{
    alert('Use ctrl key to visit URL');
  }
}
}
