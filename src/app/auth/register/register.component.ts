import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router) { }

  registerForm = this.builder.group({
    userId: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email]))
  })

  onSubmit() {
    if (this.registerForm.valid) {
      this.service.proceedRegister(this.registerForm.value).subscribe((res) => {
        this.toastr.success('Succesfully Register'),
          this.router.navigate(['login'])
      })
    } else {
      this.toastr.warning('Please enter the valid data')
    }
  }

}
