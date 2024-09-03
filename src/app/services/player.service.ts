import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //adress de destination (serveur backend:local)
  playerURL: string = "http://localhost:3000/players";
  constructor(private httpClient: HttpClient) { }
  //request to get all players
  //response: Array of Objects
  getAllPlayers() {
    return this.httpClient.get<{ T: any }>(this.playerURL);
  }
  //request to get player by id
  //response:one object
  getPlayerById(id: any) {
    return this.httpClient.get<{ data: any }>(`${this.playerURL}/${id}`);
  }
  //request to delete player by id
  //response:boolean/string
  deletePalyerById(id: any) {
    return this.httpClient.delete<{ msg: string }>(`${this.playerURL}/${id}`);
  }
  //request to add player by obj
  //response:boolean/string
  addPlayer(playerObj: any) {
    return this.httpClient.post<{ msg: string }>(this.playerURL, playerObj);
  }
  //request to update player by obj
  //response:boolean/string
  editPlayerById(newObj: any) {
    return this.httpClient.put<{ msg: string }>(this.playerURL, newObj);
  }
  searchPlayer(obj: any) {
    return this.httpClient.post<{ tab: any}>(this.playerURL+ "/search", obj);
  }
}
