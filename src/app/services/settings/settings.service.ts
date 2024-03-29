import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default-dark.css",
    tema: "default"
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    console.log("Guardado en el localStorage");
    localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem("ajustes")) {
      this.ajustes = JSON.parse(localStorage.getItem("ajustes"));

      console.log("Cargando del localStorage");
      this.aplicarTema(this.ajustes.tema);
    } else {
      console.log("usando valores por defecto");
    }
  }

  aplicarTema(tema: string) {
    let url = `assets/css/colors/${tema}.css`;
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this._document.getElementById("tema").setAttribute("href", url);


    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
