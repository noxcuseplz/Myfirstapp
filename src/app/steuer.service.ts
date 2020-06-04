import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SteuerService {

  map1: { [key: string]: string; } = {
    ['key1']: 'wert1',
    ['key2']: 'wert2',
  };

  map2: { [key: string]: string; } = {
    ['key1']: 'wert1',
    ['key2']: 'wert2',
  };


  constructor() { }
}
