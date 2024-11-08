import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import Chart  from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public chart: any;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.createDonutChart();
  }

  createDonutChart(): void {
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red', 'Blue','Green'],
           datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100],
    backgroundColor: [
      'red',
      'blue',
      'green'        
    ],
    
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5,
        cutout: "70%",
      },

    });
  }

}
