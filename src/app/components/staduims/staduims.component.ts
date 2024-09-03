import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staduims',
  templateUrl: './staduims.component.html',
  styleUrls: ['./staduims.component.css']
})
export class StaduimsComponent implements OnInit {
  staduims: any = [{ id: 1, name: 'Rades', country: 'Tunisie', capacity: 65000 },
  { id: 2, name: 'CoupNew', country: 'Spain', capacity: 80000 },
  { id: 3, name: 'Rades', country: 'Spain', capacity: 90000 },];
  affiche(id: number, msg: string) {
    alert('Staduim N°: ' + id + ' ' + msg);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
