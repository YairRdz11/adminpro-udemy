import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  
  ajustes : Ajustes = {
    temaUrl: "assets/css/colors/default-dark.css",
    tema: "default-dark"
  }

  constructor() {
    this.cargarAjustes();
  }

  public guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  public cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.aplicarTema(this.ajustes.tema);

  }

  public aplicarTema( tema : string){
    let url = `assets/css/colors/${tema}.css`
    document.getElementById('tema').setAttribute('href', url )

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl : string;
  tema :string;
}
