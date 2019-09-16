import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopsComponent } from './tops/tops.component';
import { PantsComponent } from './pants/pants.component';
import { EthnicsComponent } from './ethnics/ethnics.component';
import { WesternwearComponent } from './westernwear/westernwear.component';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ContactusComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    TopsComponent,
    PantsComponent,
    EthnicsComponent,
    WesternwearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     ReactiveFormsModule,
    //  HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AboutComponent
  ]
})

export class AppModule { 

}
