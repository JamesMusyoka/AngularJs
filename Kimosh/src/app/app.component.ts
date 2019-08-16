import { Component } from '@angular/core';
import { Title } from './kimosh';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles: Title = [
    {id: 1, name: 'Watch me using AngularJs'},
    {id: 2, name: 'Buy cookies'},
    {id: 3, name: 'Get new phone Case'},
    {id: 4, name: 'Get Dog Food'},
    {id: 5, name: 'Solve math homework'},
    {id: 6, name: 'Plot my world domination plan'},
  ];

  constructor() {
    this.titles = ['Watch Me using AngularJs', 'Buy coookies', 'Get new phone case'];
  }
}
