import { RescuewinchComponent } from './rescuewinch/rescuewinch.component';
import { SellingComponent } from './selling/selling.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BooknowComponent } from './booknow/booknow.component';
import { ComparComponent } from './compar/compar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewcarComponent } from './newcar/newcar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OldcarComponent } from './oldcar/oldcar.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { DetailsnewcarComponent } from './detailsnewcar/detailsnewcar.component';
import { DetailsoldcarComponent } from './detailsoldcar/detailsoldcar.component';
import { DetailsagenciesComponent } from './detailsagencies/detailsagencies.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'oldcar',canActivate:[AuthGuard],component:OldcarComponent},
  {path:'newcar',canActivate:[AuthGuard],component:NewcarComponent},
  {path:'services',canActivate:[AuthGuard],component:ServicesComponent},
  {path:'selling',canActivate:[AuthGuard], component:SellingComponent},
  {path:'rescuewinch',canActivate:[AuthGuard],component:RescuewinchComponent},
  {path:'compar',canActivate:[AuthGuard],component:ComparComponent},
  {path:'booknow',canActivate:[AuthGuard],component:BooknowComponent},
  {path:'agencies',canActivate:[AuthGuard],component:AgenciesComponent},
  {path:'home/oldcar',canActivate:[AuthGuard],component:OldcarComponent},
  {path:'home/newcar',canActivate:[AuthGuard],component:NewcarComponent},
  {path:'home/services',canActivate:[AuthGuard],component:ServicesComponent},
  {path:'home/selling',canActivate:[AuthGuard], component:SellingComponent},
  {path:'home/rescuewinch',canActivate:[AuthGuard],component:RescuewinchComponent},
  {path:'home/compare',canActivate:[AuthGuard],component:ComparComponent},
  {path:'home/booknow',canActivate:[AuthGuard],component:BooknowComponent},
  {path:'home/agencies',canActivate:[AuthGuard],component:AgenciesComponent},
  {path:'newcar/detailsnewcar',canActivate:[AuthGuard],component:DetailsnewcarComponent},
  {path:'oldcar/detailsoldcar',canActivate:[AuthGuard],component:DetailsoldcarComponent},
  {path:'agencies/detailsagencies',canActivate:[AuthGuard],component:DetailsagenciesComponent},


  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }