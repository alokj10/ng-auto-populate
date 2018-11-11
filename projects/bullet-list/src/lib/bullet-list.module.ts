import { NgModule } from '@angular/core';
import { BulletListComponent } from './bullet-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatInputModule, MatCardModule, 
  MatListModule, MatButtonModule } from '@angular/material';

const modules = [
  MatFormFieldModule,MatInputModule,MatCardModule,MatListModule,MatButtonModule,
  FormsModule, ReactiveFormsModule, BrowserModule
]

@NgModule({
  imports: modules,
  declarations: [BulletListComponent],
  exports: [modules, BulletListComponent]
})
export class BulletListModule { }
