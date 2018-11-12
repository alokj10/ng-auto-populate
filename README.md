
## An Angular library to create filter list.

# Installation
npm install bullet-list

# Screen shots
![Filter](https://github.com/alokj10/ng-auto-populate/blob/master/images/ss_4.PNG)

![ss1](https://github.com/alokj10/ng-auto-populate/blob/master/images/ss_1.PNG)

![ss2](https://github.com/alokj10/ng-auto-populate/blob/master/images/ss_2.PNG)

![ss3](https://github.com/alokj10/ng-auto-populate/blob/master/images/ss_3.PNG)

# Sample code

app.component.html
```html
    <div class="example">
        <bl-bullet-list [options]="data"></bl-bullet-list>
    </div>
```
app.module.ts
<pre>
import { BulletListModule } from 'bullet-list';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BulletListModule
  ],
  exports: [
    BulletListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

</pre>
app.component.ts
<pre>
import { Component } from '@angular/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [
    {name: 'Mobile', suboptions:[
      {name: 'Samsung'},
      {name: 'Oppo'},
      {name: 'Vivo'},
      {name: 'Nokia'},
      {name: 'Le1s'},
      {name: 'Xiomi'},
      {name: 'Micromax'},
      {name: 'Lenovo'}
    ]},
    {name: 'Television', suboptions:[
      {name: 'Sony'},
      {name: 'Philips'},
      {name: 'Micromax'},
      {name: 'Onida'},
      {name: 'Videocon'},
      {name: 'LG'},
      {name: 'Thomson'},
      {name: 'MarQ'}
    ]},
    {name: 'Laptop', suboptions:[
      {name: 'Sony Vaio'},
      {name: 'Dell Latitude'},
      {name: 'HP 14q'},
      {name: 'Acer'},
      {name: 'Lenovo'},
      {name: 'Asus'},
      {name: 'Dell Inspiron'},
      {name: 'HP 15q'}
    ]},
    {name: 'Washing Machine', suboptions:[
      {name: 'IFB'},
      {name: 'Lloyd'},
      {name: 'Mitashi'},
      {name: 'BPL'},
      {name: 'Onida'},
      {name: 'Panasonic'},
      {name: 'Sharp'},
      {name: 'Siemens'}
    ]}
  ];
  
}
</pre>
app.component.css
<pre>
.example {
    margin-top: 2%;
    padding-left: 30%;
    padding-right: 30%;
  }
</pre>
