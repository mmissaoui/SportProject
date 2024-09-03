import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //formId
  searchForm!: FormGroup;
  matchId: any;
  matchTab :any;
  constructor(private formBuilder: FormBuilder, private matchServie: MatchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      scoreOne: ['', [Validators.required]],
      scoreTwo: ['', [Validators.required]],
    });

  }
  searchMatch() {
    // let matches = JSON.parse(localStorage.getItem('matches') || "[]");
    // for (let i = 0; i < matches.length; i++) {
    //   if ((this.match.scoreOne == matches[i].scoreOne) && (this.match.scoreTwo == matches[i].scoreTwo)) {
    //     this.matchTab.push(matches[i]);
    //   }
    // }
    console.log(this.searchForm.value);
    this.matchServie.searchMatch(this.searchForm.value).subscribe(
      (response) => {
        console.log(response.tab);
        this.matchTab = response.tab;
      }
    );
  }
}