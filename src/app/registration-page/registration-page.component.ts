import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../shared/interfaces';
import { RegistrationService } from '../shared/services/registration.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  public message: string
  private _submitted: boolean = false

  private _registrationForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    userName: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30)
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/)
    ])
  })

  constructor(
    private _regService: RegistrationService,
    private _router: Router
  ) { }

  get submitted() {
    return this._submitted
  }

  get registrationForm() {
    return this._registrationForm
  }

  get email() {
    return this._registrationForm.get('email')
  }

  get userName() {
    return this._registrationForm.get('userName')
  }

  get password() {
    return this._registrationForm.get('password')
  }

  submit() {
    if (this._registrationForm.invalid) {
      return
    }

    this._submitted = true

    const registration: Registration = {
      email: this.email?.value,
      username: this.userName?.value,
      password: this.password?.value
    }

    this._regService.registration(registration).subscribe(() => {

      (res: any) => console.log(res)
      this._submitted = false
      this._registrationForm.reset()
      this._router.navigate(['/auth'])
    },
      e => {
        if (e.error.username[0]) {
          this.message = "Пользователь с таким именем уже существет"
        }
        
      }
    )
  }

  ngOnInit(): void {
  }

}
