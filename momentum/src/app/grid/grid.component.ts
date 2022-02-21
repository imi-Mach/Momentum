import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-enterprise'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public columnDefs: ColDef[] = [
    { headerName: "Make", field: "make"   },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ];

  rowData = [
    { make: 'ex1', model: 'aaa', price: 1000},
    { make: 'ex2', model: 'bbb', price: 2000}
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    sortable: true,
    menuTabs: ['generalMenuTab', 'filterMenuTab','columnsMenuTab']
  };

  /*
  public getMainMenuItems = () => {
    return ['pinSubMenu', 'columnsMenuTab', 'filterMenuTab']
   }
  */

  // consider adding data populator here
  constructor() { }

  ngOnInit(): void {
  }

}
