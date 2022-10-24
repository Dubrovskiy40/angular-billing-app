import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public user: UserResponse

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _userService: UserService
    ) { }


    logout() {
      this._authService.logout().subscribe(res => {
        this._router.navigate(['/auth'])
        localStorage.clear()
      })

    }

    ngOnInit(): void {
      this._userService.getUserInfo().subscribe((res) => {
        this.user = res[0]
      },
        e => console.log(e)
      )
  }

}
