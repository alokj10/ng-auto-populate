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
