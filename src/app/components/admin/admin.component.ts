import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  titles: any = ['Matches','Teams','Players','Staduims'];
  constructor() { }
  ngOnInit(): void {
  }
}
