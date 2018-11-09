import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User1 {
  name: string; title: string;
}

@Component({
  selector: 'bl-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css']
})
export class BulletListComponent implements OnInit {

  @Input() options: any[];
  allSelected: any[] = [];
  myControl = new FormControl();
// options: any[] = [
//   {name: 'Mary', title: 'Stud Mary'},
//   {name: 'Shelley', title: 'Stud Shelley'},
//   {name: 'Igor', title: 'Stud Igor'}
// ];
filteredOptions: Observable<any[]>;

ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | User1>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
}

displayFn(user?: any): string | undefined {
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

private _filter(name: string): any[] {
  const filterValue = name.toLowerCase();

  return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
}

private _filterTitle(title: string): any[] {
  const filterValue = title.toLowerCase();
  this.options.filter(option => {
      console.log(option.title.toLowerCase());
  });
  console.log('filter: ' + filterValue);
  return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
 }
}
