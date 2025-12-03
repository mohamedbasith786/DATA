import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import axios from 'axios';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})

export class App {
  
   userData: any[] = [];

   apiurl="https://jsonplaceholder.typicode.com/posts";

  async getuserData() {
    const response = await axios.get(this.apiurl);
    this.userData =response.data;
  }
  

  ngOnInit() {
    this.getuserData();
}
removeData(){
this.userData.splice(0,this.userData.length - this.userData.length+1);
}

}

