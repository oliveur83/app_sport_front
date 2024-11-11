import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {records = [
  { date: '2024-08-01', distance: 5.2, time: 0.5 },
  { date: '2024-08-03', distance: 6.8, time: 0.6 },
  { date: '2024-08-10', distance: 7.5, time: 0.7 }
];

goals = [
  { description: 'Courir 10 km en moins de 50 minutes', deadline: '2024-09-01' },
  { description: 'Participer à un semi-marathon', deadline: '2024-11-01' },
  { description: 'Améliorer le temps sur 5 km à moins de 25 minutes', deadline: '2024-10-01' }
];

message: string = '';

constructor(private http: HttpClient) { }

// Fonction qui envoie les données au backend
fetchHello() {
  this.http.get('http://localhost:8080/', { responseType: 'text' })
    .subscribe(
      (response) => {
        this.message = response; // Affiche la réponse "Hello, world!"
        console.log('Réponse du serveur:', response);
      },
      (error) => {
        console.error('Erreur:', error);
      }
    );
}
}
