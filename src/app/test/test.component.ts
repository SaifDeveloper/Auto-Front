import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {DialogService} from './dialog.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public dialogservice: DialogService) { }


  ngOnInit() {

  }

  openDialog(){
    this.dialogservice.openDialog()
  }


}



