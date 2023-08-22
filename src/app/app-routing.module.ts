import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { RewardsComponent } from './components/rewards/rewards.component';
import { SigninComponent } from './components/signin/signin.component';


const routes: Routes = [
  { path: 'rewards',component:RewardsComponent },
  { 
    path:'signin',component: SigninComponent
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
