import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-enterprise'

import { ImageFormatterComponent } from "../image-formatter/image-formatter.component";

import sampleData from '../../assets/data/sample_data.json';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public columnDefs: ColDef[] = [
    { 
      headerName: "Fund", 
      field: "Fund",
      cellStyle: {color: '#0985C7'}
    },
    { 
      headerName: "Pending Actions", 
      field: "Pending_Actions",
      cellRenderer: ImageFormatterComponent
      
    },
    { headerName: "Daily Book P&L", field: "Daily_Book_PL" },
    { headerName: "MTD Book P&L", field: "MTD_Book_PL" },
    { headerName: "YTD Book P&L", field: "YTD_Book_PL" },
    { headerName: "End Book NAV", field: "End_Book_NAV" },
    { headerName: "Client", field: "Client" }
  ];

  rowData = sampleData;

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    sortable: true,
    filter: true,
    menuTabs: ['filterMenuTab','generalMenuTab', ]
  };


  public getMainMenuItems = () => {
    return ['pinSubMenu']
   }


  // consider adding data populator here
  constructor() { }

  ngOnInit(): void {
  }

}
