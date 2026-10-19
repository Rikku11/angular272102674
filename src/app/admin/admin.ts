import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Content } from '../content/content';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, Header, Footer, Content, Sidebar ],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}