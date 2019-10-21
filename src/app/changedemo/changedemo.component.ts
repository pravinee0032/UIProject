import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedemo',
  templateUrl: './changedemo.component.html',
  styleUrls: ['./changedemo.component.css']
})
export class ChangedemoComponent  {

   public lstCategories;
   public lstProducts;
   public productPrice;
   public productName;
   public imgPreview;
   public categories=['Electronics','Shoes'];
   public electronics=['Samsung Tv','Mobile'];
   public shoes=['Nike Casuals','Lee Cooper Boot'];
   public data=[
     {Name:'Samsung Tv',price:40000.34,photo:'assets/tv.jpg'},
     {Name:'Mobile',price:4000.34,photo:'assets/mobile.jpg'},
     {Name:'Nike Casuals',price:5000.34,photo:'assets/shoe.jpg'},
     {Name:'Lee Cooper Boot',price:6000.34,photo:'assets/cooper.jpg'}
   ];
   public products;
   public cartItems=[];
   public categoryChanged(){
     switch(this.lstCategories){
       case 'Electronics':
         this.products=this.electronics;
         break;
         case 'Shoes':
           this.products=this.shoes;
           break;
     }
   }
    public showDetails(index){
      this.productName=this.data[index].Name;
      this.productPrice=this.data[index].price;
      this.imgPreview=this.data[index].photo;
    }
     public productChanged(){
       switch(this.lstProducts){
         case 'Samsung Tv':
           this.showDetails(0);
           break;
           case 'Mobile':
             this.showDetails(1);
             break;
             case 'Nike Casuals':
               this.showDetails(2);
               break;
               case 'Lee Cooper Boot':
                 this.showDetails(3);
                 break;
       }
     }
     public addToCart(){
       alert('Item Added to Cart');
       this.cartItems.push({Name:this.productName,price:this.productPrice,photo:this.imgPreview});
     }
}
