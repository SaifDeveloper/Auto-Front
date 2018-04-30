import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  cards=[];

  constructor(private httpService: HttpClient) {
    // var toggle = document.getElementsByClassName('navbar-toggler')[0],
    //   collapse = document.getElementsByClassName('navbar-collapse')[0];

  }

  ngOnInit() {
    this.httpService.get('./assets/cards.json').subscribe(
      data => {
        this.cards = data as string [];	 // FILL THE ARRAY WITH DATA.
        // console.log(this.nav_array);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
