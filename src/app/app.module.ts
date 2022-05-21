import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from "ngx-spinner";
import { AgenciesComponent } from './agencies/agencies.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooknowComponent } from './booknow/booknow.component';
import { ComparComponent } from './compar/compar.component';
import { DetailsagenciesComponent } from './detailsagencies/detailsagencies.component';
import { DetailsnewcarComponent } from './detailsnewcar/detailsnewcar.component';
import { DetailsoldcarComponent } from './detailsoldcar/detailsoldcar.component';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewcarComponent } from './newcar/newcar.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OldcarComponent } from './oldcar/oldcar.component';
import { RegisterComponent } from './register/register.component';
import { RescuewinchComponent } from './rescuewinch/rescuewinch.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SellingComponent } from './selling/selling.component';
import { ServicesComponent } from './services/services.component';
import { BrandCarsComponent } from './brand-cars/brand-cars.component';
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
    SearchResultComponent,
    BrandCarsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
     ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     CarouselModule,
     Ng2SearchPipeModule,
     NgxSpinnerModule,
     FormsModule,
     AngularFireAuthModule,
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
