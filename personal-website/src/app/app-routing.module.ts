import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes), ]
})



export class AppRoutingModule { }
