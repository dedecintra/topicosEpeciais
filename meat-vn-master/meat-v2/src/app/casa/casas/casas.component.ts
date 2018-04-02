import { Component, OnInit , Input } from '@angular/core';

import  {Casa} from './casas.model'

@Component({
  selector: 'mt-casas',
  templateUrl: './casas.component.html',
})
export class CasasComponent implements OnInit {

  @Input() casa: Casa

  constructor() { }

  ngOnInit() {
  }

}
