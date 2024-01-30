import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private temp:AuthService){

  }
  loginF(){
    this.temp.login();
  }
}
