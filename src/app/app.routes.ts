import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { RestaComponent } from './pages/resta/resta.component';
import { DivisionComponent } from './pages/division/division.component';
import{ MultiplicacionComponent } from './pages/multiplicacion/multiplicacion.component';
import { HomeComponent } from './pages/home/home.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'suma', component: SumaComponent },
    { path: 'resta', component: RestaComponent },
    { path: 'division', component: DivisionComponent },
    { path: 'multiplicacion', component: MultiplicacionComponent},
    { path: 'acercaDe', component: AcercadeComponent}
    
];
