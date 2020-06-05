import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SteuerService {

//map1 = EStG
  map1: { [key: string]: string; } = {
    ['§1 (1)']: '§ 1 (1) EStG - Persönliche Steuerpflicht - Natürliche Person',
    ['§1 (2)']: '§ 1 (2) - iVm. § 26 (1) BAO - Wohnsitz -> unbeschränkte steuerplicht',
    ['§2 (1)']: '§ 2 (1) - Einkommen im Kalenderjahr',
    ['§2 (2)']: '§ 2 (2) - Definition Einkommen',
    ['§2 (3)']: '§ 2 (3) - sachliche Steuerpflicht - Einkunftsarten prüfen',
    ['§2 (3) Z1']: '§ 2 (3) Z1 iVm. § 21 - Einkünfte aus Land- und Forstwirtschaft',
    ['§2 (3) Z2']: '§ 2 (3) Z2 iVm. § 22 - Einkünfte aus selbstständiger Arbeit',
    ['§2 (3) Z3']: '§ 2 (3) Z3 iVm. § 23 - Einkünfte aus Gewerbebetrieb',
    ['§2 (3) Z4']: '§ 2 (3) Z4 iVm. § 25 - Einkünfte aus nichtselbstständiger Arbeit',
    ['§2 (3) Z5']: '§ 2 (3) Z5 iVm. § 27 - Einkünfte aus Kapitalvermögen',
    ['§2 (3) Z6']: '§ 2 (3) Z6 iVm. § 28 - Einkünfte aus Vermietung und Verpachtung',
    ['§2 (3) Z7']: '§ 2 (3) Z7 iVm. § 29 - sonstige Einkünfte',
    ['§2 (5)']: '§ 2 (5) - Gewinnermittlungszeitraum = Wirtschaftsjahr',
    ['§4 (1)']: '§ 4 (1) - Gewinnermittlung durch Betriebsvermögensvergleich',
    ['§4 (3)']: '§ 4 (3) - Gewinnermittlung durch Einnahmen-Ausgaben-Rechnung',
    ['§5 (1)']: '§ 5 (1) - Gewinnermittlung der rechnungslegungspflichtigen Gewerbetreibenden (§ 189 UGB)',
    ['§6 Z2 lit c']: '§6 Z2 lit c - Verlustausgleichsbeschränkung Einkünfte aus Kapitalvermögen',
    ['§6 Z9']: '§6 Z9 - Unentgeltlicher Erwerb von Firmen',
    ['§8 (3)']: '§ 8 (3) - Verteilung des Firmenwerts auf 15 Jahre',
    ['§8 (1)']: '§ 8 (1) - Abschreibung von Gebäuden ohne Nachweis der Nutzungsdauer: 2,5 %',
    ['§8 (1) W']: '§ 8 (1) - Abschreibung von Gebäuden für Wohnzwecke ohne Nachweis der Nutzungsdauer: 1,5 %',
    ['§21']: '§ 21 - Einkünfte aus Land- und Forstwirtschaft',
    ['§22']: '§ 22 - Einkünfte aus selbstständiger Arbeit',
    ['§22 Z2']: '§ 22 Z2 - Einkünfte aus selbstständiger Arbeit - Gewinnanteile an wesentlich beteiligte (<25 %) Gesellschafter von Kapitalgesellschaften (GmbH, AG)',
    ['§23']: '§ 23 - Einkünfte aus Gewerbebetrieb',
    ['§23 Z2']: '§ 23 Z2 - Einkünfte aus Gewerbebetrieb - Gewinnanteile an Gesellschafter einer Personengesellschaft (OG, KG)',
    ['§24']: '§ 24 - Veräußerungsgewinne',
    ['§24 (4)']: '§ 24 (4) - Veräußerungsgewinne - Freibetrag von 7.300,-',
    ['§25']: '§ 25 - Einkünfte aus nichtselbstständiger Arbeit',
    ['§25 (1) Z1 lit b']: '§ 25 (1) Z1 lit b - Einkünfte aus nichtselbstständiger Arbeit - Gewinnanteile/Bezüge an nicht-wesentlich beteiligte Gesellschafter von Kapitalgesellschaften (GmbH, AG)',
    ['§27']: '§ 27 - Einkünfte aus Kapitalvermögen',
    ['§27a']: '§ 27a - Besonderer Steuersatz bei Einkünften aus Kapitalvermögen',
    ['§28']: '§ 28 - Einkünfte aus Vermietung und Verpachtung',
    ['§29']: '§ 29 - sonstige Einkünfte',
    ['§37 (2) Z1']: '§ 37 (2) Z1 - Ermäßigung der Progression - Verteilung von Veräußerungsgewinnen auf 3 Jahre. Bedingung: Erwerb vor 7 Jahren.',
    ['§37 (5)']: '§ 37 (5) - Hälfte des Durchschnittssteuersatzes',

  };

//map2 = KStG
  map2: { [key: string]: string; } = {
    ['key1']: 'wert1',
    ['key2']: 'wert2',
  };


  constructor() { }
}
