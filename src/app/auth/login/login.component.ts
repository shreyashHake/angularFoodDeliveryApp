import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public authService: AuthService,
    public router: Router) { }

  login() {
    this.authService.isLoggedIn = !this.authService.isLoggedIn;
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn || (this.username == 'admin@hitachi.com' && this.password == '123')) {
        const redirectUrl = '/home';

        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }
}
