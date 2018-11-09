

import {Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string; title: string;
}

@Component({
    selector: 'list-input',
    templateUrl: './list-input.component.html',
    styleUrls: ['./list-input.component.css']
  })
  export class ListInputComponent {
    title = 'auto-populate';
    allSelected: any[] = [];
    myControl = new FormControl();
  options: User[] = [
    {name: 'Mary', title: 'Stud Mary'},
    {name: 'Shelley', title: 'Stud Shelley'},
    {name: 'Igor', title: 'Stud Igor'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
      if(!user) return undefined;
      console.log(user.title);
      if(this._filterTitle(user.title)) {
          console.log('match');
        this.allSelected.push(user.title);
      } 
      let finalString = this.allSelected.join(', ');  
    // return user ? user.title : undefined;
    console.log('display called: ' + finalString);
    return user ? finalString : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterTitle(title: string): User[] {
    const filterValue = title.toLowerCase();
    this.options.filter(option => {
        console.log(option.title.toLowerCase());
    });
    console.log('filter: ' + filterValue);
    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }
}