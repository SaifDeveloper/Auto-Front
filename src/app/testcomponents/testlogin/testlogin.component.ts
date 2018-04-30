import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testlogin',
  templateUrl: './testlogin.component.html',
  styleUrls: ['./testlogin.component.css']
})
export class TestloginComponent implements OnInit {

  hide = true;
  selected = 'option2';

  constructor() { }

  ngOnInit() {
  }

}
