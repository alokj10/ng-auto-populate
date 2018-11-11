import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


// export interface User1 {
//   name: string; title: string;
// }

@Component({
  selector: 'bl-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css']
})
export class BulletListComponent implements OnInit {

  @Input() options: any[];
  allSelected: any[] = [];
  myControl = new FormControl();

  filteredOptions: Observable<any[]>;
  filterList: any[] = [];

    ngOnInit() {
      this.initializeOptions();
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith<string | any>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
    }

    initializeOptions() {
      if(this.options && this.options.length > 0) {
        this.options.forEach((item) => {
          item.isOpen = false;
        });
      }
    }

    handleSelection(mainItem, subItem) {
        let filterItem = {
          name: mainItem.name,
          value: subItem.name
        };
        let itemIndex = this.filterList.findIndex((x) => {
          return x.name == filterItem.name && x.value == filterItem.value;
        });
        if(itemIndex === -1){
          this.filterList.push(filterItem);
        }
    }

    removeSelection(filterItem) {
        let itemToRemoveIndex = this.filterList.findIndex((x) => {
          return x.name == filterItem.name && x.value == filterItem.value;
        });
        if(itemToRemoveIndex > -1) {
          this.filterList.splice(itemToRemoveIndex, 1);
        }
    }

    clearSelection() {
      this.filterList = [];
    }

// displayFn(user?: any): string | undefined {
//     if(!user) return undefined;
//     console.log(user.title);
//     if(this._filterTitle(user.title)) {
//         console.log('match');
//       this.allSelected.push(user.title);
//     } 
//     let finalString = this.allSelected.join(', ');  
//   // return user ? user.title : undefined;
//   console.log('display called: ' + finalString);
//   return user ? finalString : undefined;
// }

private _filter(name: string): any[] {
  const filterValue = name.toLowerCase();

  return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
}

// private _filterTitle(title: string): any[] {
//   const filterValue = title.toLowerCase();
//   this.options.filter(option => {
//       console.log(option.title.toLowerCase());
//   });
//   console.log('filter: ' + filterValue);
//   return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
//  }
}
