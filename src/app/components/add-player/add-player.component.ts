import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  //object
  player: any = {};
  //formId
  playerForm!: FormGroup;
  teams: any = [];



  constructor(private playerServie: PlayerService, private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    //Get all team from dataBase
    this.teamService.getAllteams().subscribe(
      (data) => { 
        console.log("Here list team from DB:",data)
        this.teams = data.T; }
    );
  }
  addPlayer() {
    console.log("here obj", this.player);
        // let players: any = JSON.parse(localStorage.getItem("players") || "[]");
    // console.log('Add Player BTN clicked', this.player);
    // this.player.id = this.generateID(players);
    // players.push(this.player);
    // localStorage.setItem("players", JSON.stringify(players));
    this.playerServie.addPlayer(this.player).subscribe(
      (response) => {
        console.log("here response after adding player", response);
        this.router.navigate(['/admin']);
      }
    );
  }
  // fonction pour generer un id(chercher l'id max et ajouter)
  // generateID(T: any) {
  //   var max;
  //   if (T.length == 0) {
  //     max = 0;
  //   }
  //   else {
  //     max = T[0].id
  //     for (let i = 1; i < T.length; i++) {
  //       if (T[i].id > max) { max = T[i].id; }
  //     }
  //   }
  //   return max + 1;
  // }
}
