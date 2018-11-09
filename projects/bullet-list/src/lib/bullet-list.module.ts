import { NgModule } from '@angular/core';
import { BulletListComponent } from './bullet-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatAutocompleteModule } from '@angular/material';

const modules = [
  MatFormFieldModule,MatInputModule,MatCardModule,MatAutocompleteModule,
  FormsModule, ReactiveFormsModule, BrowserModule
]

@NgModule({
  imports: modules,
  declarations: [BulletListComponent],
  exports: [modules, BulletListComponent]
})
export class BulletListModule { }
