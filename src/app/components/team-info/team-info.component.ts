import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {


  teamId: any;
  team: any = {};
  constructor(private activatedRoute: ActivatedRoute, private teamService:TeamService) { }
  ngOnInit(): void {
    this.teamId = this.activatedRoute.snapshot.params['id'];
    this.teamService.getteamById(this.teamId).subscribe(
      (response) => {
        console.log("Team is", response);
        this.team = response.data;
      }
    );
  }
}
