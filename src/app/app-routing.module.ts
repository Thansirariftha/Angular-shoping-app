import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import {FeedbackComponent}from './feedback/feedback.component'
import { from } from 'rxjs';
import { TopsComponent } from './tops/tops.component';
import { PantsComponent } from './pants/pants.component';
import { WesternwearComponent } from './westernwear/westernwear.component';
import { EthnicsComponent } from './ethnics/ethnics.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',redirectTo: '/about', pathMatch:'full' 
  },
  {path:'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login',component: LoginComponent},
  {path:'tops',component:TopsComponent},
  {path:'pants',component:PantsComponent},
  {path:'westernwear',component:WesternwearComponent},
  {path:'ethnics',component:EthnicsComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
