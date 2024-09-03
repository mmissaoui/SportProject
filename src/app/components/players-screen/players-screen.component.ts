import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-screen',
  templateUrl: './players-screen.component.html',
  styleUrls: ['./players-screen.component.css']
})
export class PlayersScreenComponent implements OnInit {
  players: any = [{ name: 'Ahmed', age: 25, number: 3, position: 'fcb' },
    { name: 'Salah', age: 30, number: 8, position: 'fcb' },
    {  name: 'Adam', age: 29, number: 6, position: 'fcb' },
    { name: 'Mohamad', age: 24, number: 4, position: 'fcb' },
    { name: 'Amine', age: 25, number: 7, position: 'fcb' }];
   
  constructor() { }

  ngOnInit(): void {
  }

}
