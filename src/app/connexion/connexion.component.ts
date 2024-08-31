import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
    // Ici, vous pouvez ajouter votre logique de connexion.
  }
}
