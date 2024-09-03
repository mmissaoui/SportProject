import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesScreenComponent } from './components/matches-screen/matches-screen.component';
import { PlayersScreenComponent } from './components/players-screen/players-screen.component';
import { SearchComponent } from './components/search/search.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPalyerComponent } from './components/edit-palyer/edit-palyer.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamScreenComponent } from './components/team-screen/team-screen.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';

const routes: Routes = [
   // if http://localhost:4200 alors HomeComponent will be displayed
   {path: '', component: HomeComponent},
   //if http://localhost:4200/inscription alors SignupComponent will be displayed
  { path: 'inscription', component: SignupComponent },
   //if http://localhost:4200/signupAdmin alors SignupComponent will be displayed
   { path: 'signupAdmin', component: SignupComponent },
  //if http://localhost:4200/signin alors LoginComponent will be displayed
  { path: 'signin', component: LoginComponent },  
  //if http://localhost:4200/add-match alors AddMatchComponent will be displayed
  { path: 'add-match', component: AddMatchComponent },
  //if http://localhost:4200/add-player alors AddPlayerComponent will be displayed
  { path: 'add-player', component: AddPlayerComponent },
  //if http://localhost:4200/add-team alors AddTeamComponent will be displayed
  { path: 'add-team', component: AddTeamComponent },
  //if http://localhost:4200/admin alors AdminComponent will be displayed
  { path: 'admin', component: AdminComponent },
  //if http://localhost:4200/match-screen alors MatchesScreenComponent will be displayed
  { path: 'match-screen', component: MatchesScreenComponent },
  //if http://localhost:4200/players-screen alors PlayersComponent will be displayed
  { path: 'players-screen', component: PlayersScreenComponent },
  { path: 'teams-screen', component: TeamScreenComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searchPlayers', component: SearchPlayersComponent },
  //matchInfo/:id path parametré(id) exemple matchInfo/1, matchInfo/2...
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'playerInfo/:id', component: PlayerInfoComponent },
  { path: 'editPlayer/:id', component: EditPalyerComponent },
  { path: 'teamInfo/:id', component: TeamInfoComponent },
  { path: 'editTeam/:id', component: EditTeamComponent },





 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
