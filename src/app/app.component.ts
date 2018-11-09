import { Component } from '@angular/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-populate';
  data: any[] = [
    {name: 'Mary', title: 'Stud Mary'},
    {name: 'Shelley', title: 'Stud Shelley'},
    {name: 'Igor', title: 'Stud Igor'},
    {name: 'Name 1', title: 'Stud Name 1'},
    {name: 'Name 2', title: 'Stud Name 2'},
    {name: 'Name 3', title: 'Stud Name 3'},
    {name: 'Name 4', title: 'Stud Name 4'},
    {name: 'Name 5', title: 'Stud Name 5'},
    {name: 'Name 6', title: 'Stud Name 6'},
    {name: 'Name 7', title: 'Stud Name 7'},
    {name: 'Name 8', title: 'Stud Name 8'},
  ];
  
}
