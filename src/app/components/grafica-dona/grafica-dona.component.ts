import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {
  
  @Input() data;
  @Input() labels;
  @Input() type;

  constructor() { }

  ngOnInit() {
  }

}
