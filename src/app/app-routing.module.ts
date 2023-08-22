import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
//

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { 
    path:'',component: SigninComponent
  },
];

const routeOptions: ExtraOptions = {
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
