import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav_array=[];
  title="IBM";

  constructor(private httpService: HttpClient) { }

  ngOnInit() {

    this.httpService.get('./assets/menu.json').subscribe(
      data => {
        this.nav_array = data as string [];	 // FILL THE ARRAY WITH DATA.
         // console.log(this.nav_array);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
