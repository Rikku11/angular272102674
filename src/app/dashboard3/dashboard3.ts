import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

declare var ApexCharts: any;

@Component({
  selector: 'app-dashboard3',
  imports: [RouterModule, Header, Footer, Sidebar],
  templateUrl: './dashboard3.html',
  styleUrl: './dashboard3.css',
})
export class Dashboard3 implements OnInit, AfterViewInit {
  // Mode Hitam (Dark)
  ngOnInit(): void {
    const root = document.documentElement;
    root.setAttribute('data-bs-theme', 'dark');
    root.style.colorScheme = 'dark';
  }

  // Render Grafik ApexCharts setelah tampilan siap
  ngAfterViewInit(): void {
    this.renderVisitorsChart();
    this.renderSalesChart();
  }

  // Auto-close & toggle sidebar
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

  renderVisitorsChart(): void {
    const element = document.querySelector('#visitors-chart');
    if (!element) return;

    const options = {
      series: [
        { name: 'High - 2023', data: [100, 120, 170, 167, 180, 177, 160] },
        { name: 'Low - 2023', data: [60, 80, 70, 67, 80, 77, 100] }
      ],
      chart: { height: 200, type: 'line', toolbar: { show: false } },
      colors: ['#0d6efd', '#adb5bd'],
      stroke: { curve: 'smooth' },
      grid: { borderColor: '#e7e7e7', row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
      markers: { size: 1 },
      xaxis: { categories: ['22th', '23th', '24th', '25th', '26th', '27th', '28th'] }
    };

    const chart = new ApexCharts(element, options);
    chart.render();
  }

  renderSalesChart(): void {
    const element = document.querySelector('#sales-chart');
    if (!element) return;

    const options = {
      series: [
        { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
        { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
        { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] }
      ],
      chart: { type: 'bar', height: 200, toolbar: { show: false } },
      plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ['transparent'] },
      xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'] },
      fill: { opacity: 1 }
    };

    const chart = new ApexCharts(element, options);
    chart.render();
  }
}