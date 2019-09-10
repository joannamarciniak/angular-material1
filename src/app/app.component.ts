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
   states;
   constructor(){
      this.loadStates();
   }
   //build list of states as map of key-value pairs
   loadStates() {
      var allStates = 'One, Two, Three';
      this.states =  allStates.split(/, +/g).map( function (state) {
         return {
            value: state.toUpperCase(),
            display: state
         };
      });
   }
}





