import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  email: string;

  validateEmail(email: string) {
    const ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
  }

  checkEmail() {
    if (this.validateEmail(this.email)) {
      document.getElementById('button').classList.add('is-active');
    }
  }

  submit() {
    document.getElementById('button').classList.add('is-done', 'is-active');
    setTimeout(() => {
      document.getElementById('button').innerHTML = 'Gracias por suscribirte! Revisa tu correo.';
    }, 500);
  }
}
