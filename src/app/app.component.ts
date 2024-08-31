import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Performance } from '../models/performance';
import { Chart, ChartConfiguration, ChartItem, ScatterDataPoint, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app pour objectif ultra trail';
  description = "Bienvenue à vous, où tout ce que vous avez envie d'avoir en statistiques est devant vous";
  constructor(

    private router: Router,

  ) {
  }
 

  ngOnInit(): void {

  }
profil(){
  this.router.navigate(['/Profil']);
}
principal(){
  this.router.navigate(['/']);
}
strava(){
  this.router.navigate(['/strava']);
}
main(){
  this.router.navigate(['/main']);
}
connexion(){
  this.router.navigate(['/connexion']);
}

}
