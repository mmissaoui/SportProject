import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any = {};
  errorMessage!: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log("Here msg", data.msg);
        console.log("Here user", data.user);
        if (data.user) {
          let decoded: any = jwtDecode(data.user);
          sessionStorage.setItem("token", data.user);
          console.log("Here decoded", decoded);
          //success login
          if (decoded.role == "client") {
            this.router.navigate(['/']);
          }
          else {
            this.router.navigate(['/admin']);
          }
        } else {
          //user not exist
          this.errorMessage = data.msg;
        }
      }
    );
  }

}
