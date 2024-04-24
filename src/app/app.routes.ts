import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { RestaComponent } from './pages/resta/resta.component';



export const routes: Routes = [
    { path: 'suma', component: SumaComponent },
    { path: 'resta', component: RestaComponent }
];
