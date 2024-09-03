import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  T: any = [{ x: 0, tab: [4, 8, 5] },
  { x: 1, tab: [4, 8, 5] },
  { x: 2, tab: [4, 8, 5] }];

  matches: any = [];

  constructor(private router: Router, private mService: MatchService) { }

  ngOnInit() {
    //this.matches = this.getTabLS('matches');
    this.mService.getAllMatches().subscribe(
      (response) => { this.matches = response.T; }
    );
  }

  //fonction qui supprime un produit et ces commandes pour un Admin
  deleteMatch(id: number) {
    this.mService.deleteMatchById(id).subscribe(
      (response) => {
        console.log("Here response after delete", response);
        this.mService.getAllMatches().subscribe(
          (data) => { this.matches = data.T; }
        );
      }
    )
  }

  //deuxieme exemple de delete:
  // deleteMatch(id:number){
  //   for (let i = 0; i < this.matches.length; i++) {
  // if (id== this.matches[i].id) {
  //   this.matches.splice(i,1);
  //   break;
  // }    
  //   }
  //   this.setTabLS('matches');
  // }
  //fonction qui cherche la position
  searchPosByIdAndKey(id: number, key: any) {
    var pos;
    var T = JSON.parse(localStorage.getItem('key') || '[]');
    for (let i = 0; i < T.length; i++) {
      if (T[i].id == id) {
        pos = i;
        break;
      }
    }
    return pos;
  }
  //fonction qui recupere le tableau depuis le LS
  getTabLS(key: any) {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
  //fonction qui sauvegarde les donnees dans LS
  setTabLS(key: any, id: number) {
    localStorage.setItem(key, JSON.stringify(id));

  }
  resultColor(s1: number, s2: number) {
    if (s1 > s2) {
      return "green";

    } else if (s1 < s2) {
      return "red"
    }
    else { return "blue"; }
  }
  scoreResult(s1: number, s2: number) {
    if (s1 > s2) {
      return "Wins";

    } else if (s1 < s2) {
      return "Losses"
    }
    else { return "Draw"; }
  }


  tableColorResult(s1: number, s2: number, team: string) {
    if (s1 > s2) {
      return ["green", team, "Win"];

    } else if (s1 < s2) {
      return ["red", team, "Loses"];
    }
    else { return ["blue", "", "Draw"]; }
  }
  //fonction
  affiche(id: number, msg: string) {
    alert('MatchN°: ' + id + ' ' + msg);
  }
  goToInfo(x: number) {
    this.router.navigate([`matchInfo/${x}`])
  }
  goToEdit(id: number) {
    this.router.navigate([`editMatch/${id}`])
  }
  // scoreColors(s1: number, s2: number) {
  //   let color: string;
  //   if (s1 > s2) {
  //     color = 'green';
  //   } else if (s1 < s2) {
  //     color = 'red';
  //   }
  //   else { color = 'blue' }
  //   return color;
  // }

}



