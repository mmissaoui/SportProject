import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //adress de destination (serveur backend:local)
  matchURL: string = "http://localhost:3000/matches";
  constructor(private httpClient: HttpClient) { }
  //request to get all matches
  //response: Array of Objects
  getAllMatches() {
    return this.httpClient.get<{ T: any }>(this.matchURL);
  }
  //request to get match by id
  //response:one object
  getMatchById(id: any) {
    return this.httpClient.get<{ data: any }>(`${this.matchURL}/${id}`);
  }
  //request to delete match by id
  //response:boolean/string
  deleteMatchById(id: any) {
    return this.httpClient.delete<{ msg: String }>(`${this.matchURL}/${id}`);
  }
  //request to add match by obj
  //response:boolean/string
  addMatch(matchObj: any) {
    return this.httpClient.post<{ msg: string }>(this.matchURL, matchObj);
  }
  //request to update match by obj
  //response:boolean/string
  editMatchById(newObj: any) {
    return this.httpClient.put<{ msg: String }>(this.matchURL, newObj);
  }
  //request to search match
  //response:boolean/string
  searchMatch(obj: any) {
    return this.httpClient.post<{ tab: any}>(this.matchURL+ "/search", obj);
  }

}
