import { Routes } from '@angular/router';
 import { ProfilComponent } from './profil/profil.component';

import { PrincipalComponent } from './principal/principal.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AlimentationStravaComponent } from './alimentation-strava/alimentation-strava.component';
import { AlimentationMainComponent } from './alimentation-main/alimentation-main.component';
export const routes: Routes = [
    { path: 'Profil', component: ProfilComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'strava', component: AlimentationStravaComponent },
    { path: 'main', component: AlimentationMainComponent },
    { path: '', component: PrincipalComponent },
];
