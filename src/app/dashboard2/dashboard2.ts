import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-dashboard2',
  imports: [RouterModule, Header, Footer, Sidebar],
  templateUrl: './dashboard2.html',
  styleUrl: './dashboard2.css',
})
export class Dashboard2 implements OnInit {
  
  ngOnInit(): void {
    const root = document.documentElement;
    root.setAttribute('data-bs-theme', 'light');
    root.style.colorScheme = 'light';
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