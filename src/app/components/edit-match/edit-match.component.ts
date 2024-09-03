import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  match: any = {};
  matchId: any;
  matchForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private matchService: MatchService) { }
  ngOnInit(): void {
    this.matchId = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(this.matchId).subscribe(
      (data) => {
        console.log("Here data from BE", data);
        this.match = data.data;
      }
    );
  }
  editMatch() {
    this.matchService.editMatchById(this.match).subscribe(
      (response) => {
        console.log("Here response afeter update", response);
        this.router.navigate(['admin']);
  }
    )
}

}
