import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any = [];
  affiche(id: number, msg: string) {
    alert('Palyer N°: ' + id + ' ' + msg);
  }
  constructor(private router: Router, private mService: PlayerService) { }

  ngOnInit() {
    //this.matches = this.getTabLS('matches');
    this.mService.getAllPlayers().subscribe(
      (response) => {
        this.players = response.T;
        console.log("here teams with players info", response.T);

      }
    );
  }
  goToInfo(id: number) {
    this.router.navigate([`playerInfo/${id}`])
  }
  goToEdit(id: number) {
    this.router.navigate([`editPlayer/${id}`])
  }
  deletePlayer(id: number) {
    this.mService.deletePalyerById(id).subscribe(
      (response) => {
        console.log("Here response after delete", response);
        this.mService.getAllPlayers().subscribe(
          (data) => { this.players = data.T; }
        );
      }
    )
  }
}
