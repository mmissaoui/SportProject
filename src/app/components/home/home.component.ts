import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: any={scoreOne:5,scoreTwo:3,teamOne:'CA',teamTwo:'EST'}
  constructor() { }

  ngOnInit(): void {
  }

}
