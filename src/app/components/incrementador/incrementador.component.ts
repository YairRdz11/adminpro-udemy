import { Component, OnInit, Input, Output, EventEmitter, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @ViewChild('txtProgreso') txtProgreso : ElementRef;
  @Input() leyenda : string = 'Leyenda';
  @Input() progreso : number = 50;

  @Output() cambioValor : EventEmitter<number> = new EventEmitter();
  
  constructor() {
  }

  ngOnInit() {
  }

  public onChanges(newValue : number){

    if(newValue > 100)
      this.progreso = 100;
    else if(newValue < 0)
      this.progreso = 0;
    else
      this.progreso = newValue;

    this.txtProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  public cambiarValor(valor : number){
    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso += valor;
    this.txtProgreso.nativeElement.focus();
    this.cambioValor.emit(this.progreso);
  }

}
