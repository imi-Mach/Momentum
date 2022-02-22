import { Component } from '@angular/core';


@Component({
  selector: 'app-image-formatter',
  template: '<img class="make-blue" src="/assets/pending_actions_black_24dp.svg">',
  styleUrls: ['./image-formatter.component.css']
})
export class ImageFormatterComponent {
  params: any;
  agInit(params: any){
    this.params = params; 
  }  
}
