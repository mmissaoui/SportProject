import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  path!: string;
  errorMessage!: string;
  photo: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.path = this.router.url
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPassword: ['']
    });
  }
  signUp() {
    console.log('signUp clicked:', this.signupForm.value);
    if (this.path == '/signupAdmin') { this.signupForm.value.role = 'admin' }
    else { this.signupForm.value.role = 'client' }
    console.log("here user", this.signupForm.value);
    this.userService.signUp(this.signupForm.value, this.photo).subscribe(
      (response) => {
        if (response.msg == "User Added with success") {
          console.log("here response after adding user", response);
          this.router.navigate(['/signin']);
        }
        else {
          this.errorMessage = response.msg;
        }
      }
    );
  }
  selectFile(event: any) {
    // const file = (event.target as HTMLInputElement).files[0];
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.photo = inputElement.files[0];
      console.log("Here file selected", this.photo);
    }

  }
}
