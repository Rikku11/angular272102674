import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, Header, Footer, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  
  ngOnInit(): void {
    const root = document.documentElement;
    root.setAttribute('data-bs-theme', 'dark');
    root.style.colorScheme = 'dark';
  }

 
  @HostListener('document:click', ['$event.target'])
  onClick(t: any) {
    const b = document.body.classList;
    if (t.closest('[data-lte-toggle="sidebar"]')) {
      b.toggle('sidebar-open');
    } else if (
      !t.closest('.app-sidebar') ||
      t.closest('.app-sidebar a[href]:not([href="#"])')
    ) {
      b.remove('sidebar-open');
    }
  }
}