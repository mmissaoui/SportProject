import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {


  //adress de destination (serveur backend:local)
  teamURL: string = "http://localhost:3000/teams";
  constructor(private httpClient: HttpClient) { }
  //request to get all teams
  //response: Array of Objects
  getAllteams() {
    return this.httpClient.get<{ T: any }>(this.teamURL);
  }
  //request to get team by id
  //response:one object
  getteamById(id: any) {
    return this.httpClient.get<{ data: any }>(`${this.teamURL}/${id}`);
  }
  //request to delete team by id
  //response:boolean/string
  deleteTeamById(id: any) {
    return this.httpClient.delete<{ msg: String }>(`${this.teamURL}/${id}`);
  }
  //request to add team by obj
  //response:boolean/string
  addteam(teamObj: any) {
    return this.httpClient.post<{ msg: string }>(this.teamURL, teamObj);
  }
  //request to update team by obj
  //response:boolean/string
  editteamById(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.teamURL, newObj);
  }
}
