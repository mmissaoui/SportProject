import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  team: any = {};
  teamId: any;
  teamForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private teamService: TeamService) { }
  ngOnInit(): void {
    this.teamId = this.activatedRoute.snapshot.params['id'];
    this.teamService.getteamById(this.teamId).subscribe(
      (data) => {
        console.log("Here data from BE", data);
        this.team = data.data;
      }
    );
  }
  editteam() {
    this.teamService.editteamById(this.team).subscribe(
      (response) => {
        console.log("Here response afeter update", response);
        this.router.navigate(['admin']);
      }
    )
  }

}
