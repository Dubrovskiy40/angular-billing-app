import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../shared/services/auth.service";
import {User} from "../shared/interfaces";
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  private _submitted: boolean = false
  public result ?: User
  public message: string

  private _authForm: FormGroup = new FormGroup({
    login: new FormControl<string>('', [
      Validators.required
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _userService: UserService
  ) {}

  get authForm(): FormGroup {
    return this._authForm
  }

  get login() {
    return this._authForm.get('login')
  }

  get password() {
    return this._authForm.get('password')
  }

  get submitted() {
    return this._submitted
  }

  submit() {
    if (this._authForm.invalid) {
      return
    }

    this._submitted = true
    const user: User = {
      username: this.login?.value,
      password: this.password?.value,
    }

    this._auth.login(user).subscribe((res) => {
      console.log(res)
      this._authForm.reset();
      this._router.navigate(['/home', 'price']);
      this._submitted = false,
      this._userService.setUser(res)
    },  (e) => {
      console.log(e)
      this.message = "неверный логин или пароль"
      this._submitted = false
    })
  }
}
