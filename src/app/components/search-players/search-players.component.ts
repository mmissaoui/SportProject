import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.css']
})
export class SearchPlayersComponent implements OnInit {
  searchPlayerForm!: FormGroup;
  playerTab: any = [];
  constructor(private formBuilder: FormBuilder, private playerService: PlayerService) { }
  ngOnInit() {
    this.searchPlayerForm = this.formBuilder.group({
      age: ['', [Validators.required]],
    });
  }
  searchPlayer() {
    // this.playerTab = [];
    // let players = JSON.parse(localStorage.getItem('players') || "[]");
    // this.playerTab = players.filter((elt: any) =>
    //   elt.age >= this.searchPlayerForm.value.age
    // )
    // console.log(this.playerTab)
    console.log(this.searchPlayerForm.value);
    this.playerService.searchPlayer(this.searchPlayerForm.value).subscribe(
      (response) => {
        console.log(response.tab);
        this.playerTab = response.tab;

      }
    );
  }
}
