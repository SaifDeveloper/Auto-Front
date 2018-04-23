import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  hide = true;
  constructor(private httpService: HttpClient) { }

  form_data=[];
  elements =[];

  placeholder = "Enter Name";

  ngOnInit() {
    this.httpService.get('./assets/form.json').subscribe(
      data => {
        this.form_data = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log("item:",this.form_data);
         let count = Object.keys(this.form_data).length;

         for (let i=0;i<count;i++){
           this.elements.push(this.form_data[i].element);
         }


      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    console.log("Items in elements array:",this.elements)
  }



}



