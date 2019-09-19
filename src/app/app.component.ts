import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myControl = new FormControl();
   topics;
   constructor(){
      this.loadTopics();
   }
   
   loadTopics() {
      var allTopics = 'Help & Support, New In, Our work, Products, Shopping, Store';
      this.topics =  allTopics.split(/, +/g).map( function (topic) {
         return {
            value: topic,
            display: topic
         };
      });
   }
}





