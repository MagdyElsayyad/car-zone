import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsComponent } from './news/news.component';
import { NewcarComponent } from './newcar/newcar.component';
import { OldcarComponent } from './oldcar/oldcar.component';
import { ComparComponent } from './compar/compar.component';
import { ServicesComponent } from './services/services.component';
import { BooknowComponent } from './booknow/booknow.component';
import { SellingComponent } from './selling/selling.component';
import { RescuewinchComponent } from './rescuewinch/rescuewinch.component';
import { DetailsagenciesComponent } from './detailsagencies/detailsagencies.component';
import { DetailsnewcarComponent } from './detailsnewcar/detailsnewcar.component';
import { DetailsoldcarComponent } from './detailsoldcar/detailsoldcar.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AgenciesComponent } from './agencies/agencies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeheaderComponent,
    NewsComponent,
    NewcarComponent,
    OldcarComponent,
    ComparComponent,
    ServicesComponent,
    BooknowComponent,
    SellingComponent,
    RescuewinchComponent,
    DetailsagenciesComponent,
    DetailsnewcarComponent,
    DetailsoldcarComponent,
    AgenciesComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
     ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     CarouselModule,
     NgxSpinnerModule,
     AngularFirestoreModule,
     AngularFireModule.initializeApp({
      apiKey: "AIzaSyClJeukgbqVb4Yk-OYKKz6r2E82lFlcjVs",
      authDomain: "car-zone-783fa.firebaseapp.com",
      projectId: "car-zone-783fa",
      storageBucket: "car-zone-783fa.appspot.com",
      messagingSenderId: "1013337787168",
      appId: "1:1013337787168:web:122aab7439a5b9a8a4e545",
      measurementId: "G-MMWK11TV4Q"
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
