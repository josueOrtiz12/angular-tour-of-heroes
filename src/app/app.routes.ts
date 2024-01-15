import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path : 'heroes' , component : HeroesComponent},
    {path : 'dashboard' , component : DashboardComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }