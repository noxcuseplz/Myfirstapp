import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SteuerService {

//map1 = EStG
  map1: { [key: string]: string; } = {
    ['§1 (1)']: '§ 1 (1) EStG - Persönliche Steuerpflicht - Natürliche Person',
    ['§1 (2)']: '§ 1 (2) EStG iVm. § 26 (1) BAO - Wohnsitz -> unbeschränkte steuerplicht',
    ['§2 (1)']: '§ 2 (1) EStG - Einkommen im Kalenderjahr',
    ['§2 (2)']: '§ 2 (2) EStG - Definition Einkommen',
    ['§2 (3)']: '§ 2 (3) EStG - sachliche Steuerpflicht - Einkunftsarten prüfen',
    ['§2 (3) Z1']: '§ 2 (3) Z1 EStG iVm. § 21 EStG - Einkünfte aus Land- und Forstwirtschaft',
    ['§2 (3) Z2']: '§ 2 (3) Z2 EStG iVm. § 22 EStG - Einkünfte aus selbstständiger Arbeit',
    ['§2 (3) Z3']: '§ 2 (3) Z3 EStG iVm. § 23 EStG - Einkünfte aus Gewerbebetrieb',
    ['§2 (3) Z4']: '§ 2 (3) Z4 EStG iVm. § 25 EStG - Einkünfte aus nichtselbstständiger Arbeit',
    ['§2 (3) Z5']: '§ 2 (3) Z5 EStG iVm. § 27 EStG - Einkünfte aus Kapitalvermögen',
    ['§2 (3) Z6']: '§ 2 (3) Z6 EStG iVm. § 28 EStG - Einkünfte aus Vermietung und Verpachtung',
    ['§2 (3) Z7']: '§ 2 (3) Z7 EStG iVm. § 29 EStG - sonstige Einkünfte',
    ['§2 (5)']: '§ 2 (5) EStG - Gewinnermittlungszeitraum = Wirtschaftsjahr',
    ['§4 (1)']: '§ 4 (1) EStG - Gewinnermittlung durch Betriebsvermögensvergleich',
    ['§4 (3)']: '§ 4 (3) EStG - Gewinnermittlung durch Einnahmen-Ausgaben-Rechnung',
    ['§5 (1)']: '§ 5 (1) EStG - Gewinnermittlung der rechnungslegungspflichtigen Gewerbetreibenden (§ 189 UGB)',
    ['§6 Z2 lit c']: '§6 Z2 lit c EStG - Verlustausgleichsbeschränkung Einkünfte aus Kapitalvermögen - Verlustaugleich 55 %',
    ['§6 Z2 lit d']: '§6 Z2 lit d EStG - Verlustausgleichsbeschränkung Einkünfte aus privater Grundstücksveräußerung - Verlustaugleich 60 %',
    ['§6 Z9']: '§6 Z9 EStG - Unentgeltlicher Erwerb von Firmen',
    ['§7 (1)']: '§7 (1) EStG - Absetzung für Abnutzung - Abschreibung von abnutzbarem Anlagevermögen',
    ['§7 (2)']: '§7 (2) EStG - Absetzung für Abnutzung - Ganzjahresabschreibung bei Nutzung von mehr als sechs Monaten im Wirtschaftsjahr',
    ['§8 (1)']: '§ 8 (1) EStG - Abschreibung von Gebäuden ohne Nachweis der Nutzungsdauer: 2,5 %',
    ['§8 (1) W']: '§ 8 (1) EStG - Abschreibung von Gebäuden für Wohnzwecke ohne Nachweis der Nutzungsdauer: 1,5 %',
    ['§8 (3)']: '§ 8 (3) EStG - Verteilung des Firmenwerts auf 15 Jahre',
    ['§8 (6)']: '§ 8 (6) EStG - Nutzungsdauer von PKWs - mindestens 8 Jahre',
    ['§9 (1) Z1']: '§ 9 (1) Z1 EStG - Rückstellung für Abfertigungen',
    ['§9 (1) Z2']: '§ 9 (1) Z2 EStG - Rückstellung für Pensionen',
    ['§9 (1) Z3']: '§ 9 (1) Z3 EStG - Rückstellung für sonstige ungewisse Verbindlichkeiten',
    ['§9 (1) Z4']: '§ 9 (1) Z4 EStG - Rückstellung für drohende Geschäfte',
    ['§9 (5)']: '§ 9 (5) EStG - Rückstellungen mit einer Laufzeit von über einem Jahr sind mit dem Teilwert anzusetzen - Abzinsung mit 3,5 %',
    ['§10']: '§ 10 EStG - Gewinnfreibetrag - Bemessungsgrundlage ist der Gewinn abzüglich Einkünfte aus Kapitalvermögen und Grundstückveräußerungen',
    ['§10 (1) Z3']: '§ 10 (1) Z3 EStG - Grundfreibetrag - 13 % von 30.000, daher höchstens 3.900',
    ['§10 (1) Z4']: '§ 10 (1) Z4 EStG - investitionsbedingter Gewinnfreibetrag',
    ['§21']: '§ 21 EStG - Einkünfte aus Land- und Forstwirtschaft',
    ['§22']: '§ 22 EStG - Einkünfte aus selbstständiger Arbeit',
    ['§22 Z2']: '§ 22 Z2 EStG - Einkünfte aus selbstständiger Arbeit - Gewinnanteile an wesentlich beteiligte (<25 %) Gesellschafter von Kapitalgesellschaften (GmbH, AG)',
    ['§23']: '§ 23 EStG - Einkünfte aus Gewerbebetrieb',
    ['§23 Z2']: '§ 23 Z2 EStG - Einkünfte aus Gewerbebetrieb - Gewinnanteile an Gesellschafter einer Personengesellschaft (OG, KG)',
    ['§24']: '§ 24 EStG - Veräußerungsgewinne',
    ['§24 (4)']: '§ 24 (4) EStG - Veräußerungsgewinne - Freibetrag von 7.300,-',
    ['§25']: '§ 25 EStG - Einkünfte aus nichtselbstständiger Arbeit',
    ['§25 (1) Z1 lit b']: '§ 25 (1) Z1 lit b EStG - Einkünfte aus nichtselbstständiger Arbeit - Gewinnanteile/Bezüge an nicht-wesentlich beteiligte Gesellschafter von Kapitalgesellschaften (GmbH, AG)',
    ['§27']: '§ 27 EStG - Einkünfte aus Kapitalvermögen',
    ['§27a']: '§ 27a EStG - Besonderer Steuersatz bei Einkünften aus Kapitalvermögen',
    ['§28']: '§ 28 EStG - Einkünfte aus Vermietung und Verpachtung',
    ['§29']: '§ 29 EStG - sonstige Einkünfte',
    ['§37 (2) Z1']: '§ 37 (2) Z1 EStG - Ermäßigung der Progression - Verteilung von Veräußerungsgewinnen auf 3 Jahre. Bedingung: Erwerb vor 7 Jahren.',
    ['§37 (5)']: '§ 37 (5) EStG - Hälfte des Durchschnittssteuersatzes',

  };

//map2 = KStG
  map2: { [key: string]: string; } = {
    ['§1 (1)']: '§ 1 (1) KStG - Körperschaftssteuerpflichtig sind nur Körperschaften',
    ['§1 (2)']: '§ 1 (2) KStG iVm. § 27 BAO - Wohnsitz -> unbeschränkte steuerplicht',
    ['§7 (1)']: '§ 7 (1) KStG - Einkommen innerhalb eines Kalenderjahres',
    ['§7 (2)']: '§ 7 (2) KStG - Einkommen innerhalb eines Kalenderjahres',
    ['§8 (4)']: '§ 8 (4) KStG - Der Verlustabzug steht lediglich in einer Höhe von 75 % der Einkünfte zur Verfügung',
  };


  constructor() { }
}
