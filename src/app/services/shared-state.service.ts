import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SharedStateService {
  sliderValue: number = 0;

  constructor() { }
}
