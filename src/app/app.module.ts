import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BulletListModule } from 'bullet-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule, MatInputModule, MatCardModule, MatAutocompleteModule } from '@angular/material';
import { ListInputComponent } from './list-input.component';

const modules = [
  BrowserModule,
  AppRoutingModule,
  BulletListModule,
  BrowserAnimationsModule
]

@NgModule({
  declarations: [
    AppComponent,
    ListInputComponent
  ],
  imports: [
    modules
  ],
  exports: [
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
