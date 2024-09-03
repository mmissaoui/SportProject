import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchesScreenComponent } from './components/matches-screen/matches-screen.component';
import { StaduimsComponent } from './components/staduims/staduims.component';
import { PlayersScreenComponent } from './components/players-screen/players-screen.component';
import { DetailsPlayerComponent } from './components/details-player/details-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPalyerComponent } from './components/edit-palyer/edit-palyer.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamScreenComponent } from './components/team-screen/team-screen.component';
import { DetailsTeamComponent } from './components/details-team/details-team.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    HomeComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    MatchesScreenComponent,
    StaduimsComponent,
    PlayersScreenComponent,
    DetailsPlayerComponent,
    SearchComponent,
    MatchInfoComponent,
    EditMatchComponent,
    PlayerInfoComponent,
    EditPalyerComponent,
    EditTeamComponent,
    TeamInfoComponent,
    TeamScreenComponent,
    DetailsTeamComponent,
    SearchPlayersComponent,
    AsterixPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
