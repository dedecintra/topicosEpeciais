import { Component, OnInit } from '@angular/core';

import {Casa} from './casas/casas.model';

@Component({
  selector: 'mt-casa',
  templateUrl: './casa.component.html',
})
export class CasaComponent implements OnInit {

  casas: Casa[] = [
  {
    id: "Casa-de-praia",
    nome: "Casa de praia",
    categoria: "Aluguel",
    valor: "3X199",
    image: " "
  },
  {
    id: "Casa-de-praia",
    nome: "Casa de praia",
    categoria: "Aluguel",
    valor: "3X199",
    image: " "
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
