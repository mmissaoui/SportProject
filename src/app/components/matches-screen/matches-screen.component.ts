import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-screen',
  templateUrl: './matches-screen.component.html',
  styleUrls: ['./matches-screen.component.css']
})
export class MatchesScreenComponent implements OnInit {
  matches: any = [{ id: 1, scoreOne: 4, scoreTwo: 3, teamOne: 'RMD', teamTwo: 'fcb' },
    { id: 2, scoreOne: 6, scoreTwo: 6, teamOne: 'CA', teamTwo: 'ROM' },
    { id: 3, scoreOne: 9, scoreTwo: 6, teamOne: 'JUV', teamTwo: 'CIT' },
    { id: 4, scoreOne: 7, scoreTwo: 3, teamOne: 'LIV', teamTwo: 'fcb' },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
