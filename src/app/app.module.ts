import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//NO LONGER SUPPORTED: import { FlexLayoutModule } from '@angular/flex-layout';
//
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './components/signin/signin.component';
// routed components

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/angular-material-nav'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
