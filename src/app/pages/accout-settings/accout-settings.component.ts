import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes : SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  public cambiarColor(tema : string, link : any){
    

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }
  
  private aplicarCheck(link : any){
    let selectores :  any = document.getElementsByClassName('selector');

    for(let ref of selectores){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  public colocarCheck(){
    let selectores :  any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for(let ref of selectores){
      if(ref.getAttribute('data-theme') == tema){
        ref.classList.add('working');
        break;
      }
    }
  }
}
