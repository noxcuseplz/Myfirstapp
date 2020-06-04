import { Component, OnInit} from '@angular/core';

import { Einkommensteuer } from '../einkommensteuer';

@Component({
  selector: 'app-einkommensteuer-form',
  templateUrl: './einkommensteuer-form.component.html',
  styleUrls: ['./einkommensteuer-form.component.css']
})
export class EinkommensteuerFormComponent implements OnInit{

  gesellschaftsformoptionen = ['Einzelunternehmer', 'OG', 'KG', 'GmbH', 'AG'];

  sitzoptionen = ['ja', 'nein'];

  model: Einkommensteuer;

  ergebnis: number;

  submitted = false;

  ngOnInit(){
    this.model = new Einkommensteuer();
  }

  onSubmit() { 
    this.submitted = true;
    this.calculation();
  }

  calculation() {
    if (this.model.gesellschaftsform === 'AG' && this.model.sitz === 'ja') {
      this.ergebnis = this.model.einkommen * 0.25;
      } else { if (this.model.gesellschaftsform === 'GmbH' && this.model.sitz === 'ja') {
        this.ergebnis = this.model.einkommen * 0.25;
        } else { if (this.model.gesellschaftsform === 'OG' && this.model.sitz === 'ja' && this.model.einkommen < 11000) {
          this.ergebnis = 0;
        }
      }
    }
  }
}
