import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-team',
  templateUrl: './details-team.component.html',
  styleUrls: ['./details-team.component.css']
})
export class DetailsTeamComponent implements OnInit {
  @Input() obj: any;

  constructor() { }

  ngOnInit(): void {
  }

}
