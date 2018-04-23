import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  favoriteSeason: string;
  value = 0;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];




  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string,action: string) {
    this.snackBar.open("Submitted !",action,{
      duration: 3000
    });
  }

  ngOnInit() {
  }

}
