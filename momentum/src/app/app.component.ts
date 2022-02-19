import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'momentum';
  
  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ];

  rowData = [
    { make: 'ex1', model: 'aaa', price: 1000},
    { make: 'ex2', model: 'bbb', price: 2000}
  ];
}
