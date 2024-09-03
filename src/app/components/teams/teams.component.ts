import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any = [];
  constructor(private router: Router, private tService: TeamService) { }

  ngOnInit() {
    //this.team = this.getTabLS('matches');
    this.tService.getAllteams().subscribe(
      (response) => { this.teams = response.T;
        console.log("here teams with players info", response.T);
        
       }
    );
  }
  goToInfo(id: number) {
    this.router.navigate([`teamInfo/${id}`])
  }
  goToEdit(id: number) {
    this.router.navigate([`editTeam/${id}`])
  }
  deleteTeam(id: number) {
    this.tService.deleteTeamById(id).subscribe(
      (response) => {
        console.log("Here response after delete", response);
        this.tService.getAllteams().subscribe(
          (data) => { this.teams = data.T; }
        );
      }
    )
  }
}