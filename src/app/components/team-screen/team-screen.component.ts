import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-screen',
  templateUrl: './team-screen.component.html',
  styleUrls: ['./team-screen.component.css']
})
export class TeamScreenComponent implements OnInit {
  teams: any = [{ name: 'CA', owner: "Club Africain", foundation:1960},
    { name: 'EST', owner: "Esperance", foundation:1960},
    { name: 'CAB', owner: "Club Bizerte", foundation:1960},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
