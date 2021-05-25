import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active:string="login";
  constructor() { }

  ngOnInit(): void {
  }
  activate(string:string){
   this.active=string;
  }
}
