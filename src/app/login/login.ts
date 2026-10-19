import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
  standalone: true,
})
export class Login {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'login-page');
  }
}

