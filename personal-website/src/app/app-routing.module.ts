import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: '', component: HomePageComponent  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes), ]
})



export class AppRoutingModule { }
