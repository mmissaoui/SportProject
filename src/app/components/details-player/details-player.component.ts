import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-player',
  templateUrl: './details-player.component.html',
  styleUrls: ['./details-player.component.css']
})
export class DetailsPlayerComponent implements OnInit {

  @Input() obj: any;
  constructor() { }

  ngOnInit(): void {
  }

}
