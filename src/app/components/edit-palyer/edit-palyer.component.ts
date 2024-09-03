import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-palyer',
  templateUrl: './edit-palyer.component.html',
  styleUrls: ['./edit-palyer.component.css']
})
export class EditPalyerComponent implements OnInit {
  player: any = {};
  playerId: any;
  playerForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private playerService: PlayerService) { }
  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(this.playerId).subscribe(
      (data) => {
        console.log("Here data from BE", data);
        this.player = data.data;
      }
    );
  }
  editplayer() {
    this.playerService.editPlayerById(this.player).subscribe(
      (response) => {
        console.log("Here response afeter update", response);
        this.router.navigate(['admin']);
      }
    )
  }
}
