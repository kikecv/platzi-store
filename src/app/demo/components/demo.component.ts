import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['kike', 'susi', 'chris']

  power = 10;

  
  addItem() {
    this.items.push('nuevo item')
  }

  deleteItem(index: number) {
    this.items.splice(index, 1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
