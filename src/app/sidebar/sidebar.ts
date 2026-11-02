import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  host: { class: 'app-sidebar bg-body-secondary shadow' },
  imports: [RouterModule],
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
@Input() moduleName: string = '';
}