import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ];

  rowData = [
    { make: 'ex1', model: 'aaa', price: 1000},
    { make: 'ex2', model: 'bbb', price: 2000}
  ];

  // consider adding data populator here
  constructor() { }

  ngOnInit(): void {
  }

}
