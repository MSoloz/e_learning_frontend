import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//NO LONGER SUPPORTED: import { FlexLayoutModule } from '@angular/flex-layout';
//
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { SigninComponent } from './components/signin/signin.component';
import { ClassesComponent } from './components/classes/classes.component';
// routed components

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RewardsComponent,
    SigninComponent,
    ClassesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/LearnVerse'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
