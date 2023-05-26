import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuslistComponent } from './buslist/buslist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bus-list', component: BuslistComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
