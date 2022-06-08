import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./normalize.css']
})
export class LoginComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    username: [
      '',
      Validators.required
    ],
    password: [
      '',
      [Validators.required]
    ]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){

    const { username, password } = this.myForm.value;
    
    this.authService.login(username, password)
    .subscribe(
      resp => {
          console.log('La respuesta es ',resp);
          if(resp){
            this.router.navigate(['plans']);
          }
        }
      )
  }

  goHome(){
    this.router.navigate(['']);
  }

}
