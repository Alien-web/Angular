import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  image="https://cdn.rawgit.com/DeborahK/Angular-ReactiveForms/187d0a8060a67286811c1a2d61b3ca4fae45e6a4/APM/src/favicon.ico"
  constructor() { }

  ngOnInit(): void {
  }

}
