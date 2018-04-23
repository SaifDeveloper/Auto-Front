import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matgrid',
  templateUrl: './matgrid.component.html',
  styleUrls: ['./matgrid.component.css']
})
export class MatgridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
}
