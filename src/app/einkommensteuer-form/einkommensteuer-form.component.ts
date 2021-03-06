import { Component, OnInit} from '@angular/core';
import { Einkommensteuer } from '../einkommensteuer';
import { SteuerService } from '../steuer.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-einkommensteuer-form',
  templateUrl: './einkommensteuer-form.component.html',
  styleUrls: ['./einkommensteuer-form.component.css']
})
export class EinkommensteuerFormComponent implements OnInit{

  gesellschaftsformoptionen: string[] = ['Einzelunternehmer', 'OG', 'KG', 'GmbH', 'AG'];
  kgoptionen: string[] = ['Komplementär', 'Kommanditist'];
  sitzoptionen: string[] = ['Österreich', 'EU', 'Drittland'];
  incomeOptions: string[] = ['Dividende', 'Miete', 'Geschäftsführergehalt', 'Veräußerungsgewinn'];
  expenseOptions: string [] = ['Kreditzinsen'];
  model: Einkommensteuer;
  ergebnis: number;
  submitted = false;
  form: FormGroup;

  constructor(private steuerService: SteuerService, private fb: FormBuilder) {}

  ngOnInit(){
    this.form = this.fb.group({
      einkommen: ['', Validators.required],
      sitz: ['', Validators.required],
      gesellschaftsform: ['', Validators.required],
      children: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  onSubmit() {
    this.submitted = true;
    this.model = new Einkommensteuer(this.form.value);
    this.calculation();
  }

  get children() {
    return this.form.get('children') as FormArray;
  }

  onChildChanged(index: number) {
    const newControl: FormControl = this.fb.control('', Validators.required);
    const formArray: FormArray = this.children.controls[index].get('children') as FormArray;
    formArray.push(newControl);
  }

  addChild() {
    const newGroup: FormGroup = this.fb.group({
      newControl: ['', Validators.required],
      children: this.fb.array([])
    });
    this.children.push(newGroup);
  }

  removeChild(index: number) {
    this.children.removeAt(index);
  }

  calculation() {
    if (this.model.gesellschaftsform === 'AG' && this.model.sitz === 'ja') {
      this.ergebnis = this.model.einkommen * 0.25;
      } else { if (this.model.gesellschaftsform === 'GmbH' && this.model.sitz === 'Österreich') {
        this.ergebnis = this.model.einkommen * 0.25;
        } else { if (this.model.gesellschaftsform === 'OG' && this.model.sitz === 'Österreich' && this.model.einkommen < 11000) {
          this.ergebnis = 0;
          } else { if (this.model.gesellschaftsform === 'OG' && this.model.sitz === 'Österreich' && this.model.einkommen < 18000) {
            this.ergebnis = (this.model.einkommen - 11000) * 0.25 ;
            } else { if (this.model.gesellschaftsform === 'OG' && this.model.sitz === 'Österreich' && this.model.einkommen < 31000) {
              this.ergebnis = (this.model.einkommen - 18000) * 0.35 + 1750;
              } else { if (this.model.gesellschaftsform === 'OG' && this.model.sitz === 'Österreich' && this.model.einkommen < 60000) {
                this.ergebnis = (this.model.einkommen - 31000) * 0.42 + 6300;
                } else { if (this.model.gesellschaftsform === 'OG' && this.model.sitz === 'Österreich' && this.model.einkommen < 90000) {
                  this.ergebnis = (this.model.einkommen - 60000) * 0.48 + 18480;
                  } else { if (this.model.gesellschaftsform === 'OG' && this.model.sitz === 'Österreich' && this.model.einkommen >= 90000) {
                    this.ergebnis = (this.model.einkommen - 90000) * 0.5 + 32880;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

