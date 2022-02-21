import { Component } from '@angular/core';

@Component({
  selector: 'app-image-formatter',
  template: '<img src=\"/assets/summary_by_fund-white-24px.svg\">'
})
export class ImageFormatterComponent {
  params: any;
  agInit(params: any){
    this.params = params; 
  } 
}
