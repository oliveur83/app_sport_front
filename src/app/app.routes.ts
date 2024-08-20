import { Routes } from '@angular/router';
 import { ProfilComponent } from './profil/profil.component';

import { PrincipalComponent } from './principal/principal.component';
export const routes: Routes = [
    { path: 'Profil', component: ProfilComponent },
    { path: '', component: PrincipalComponent },
];
