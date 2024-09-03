import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogTab:any=[
  {title:'Romolu to stay at Real Nadrid?',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.'},
  {title:'Romolu to stay',description:'Possimus deserunt saepe tempora dolorem.'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
