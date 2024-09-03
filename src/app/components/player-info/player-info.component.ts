import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  playerId: any;
  player: any = {};
  constructor(private activatedRoute: ActivatedRoute, private playerService: PlayerService) { }
  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(this.playerId).subscribe(
      (response) => {
        console.log("Player is", response);
        this.player = response.data;
      }
    );
  }

}
