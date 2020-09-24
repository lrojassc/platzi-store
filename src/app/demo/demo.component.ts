import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  objeto = {};

  power = 10;

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // code
  }

  // tslint:disable-next-line: typedef
  addItem() {
    this.items.push('nuevo item');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }



}
