import {Injectable, model} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SharedStateService {
  private _sliderValue: number = 0;

  constructor(
    private urlParameterService: UrlParameterService
  ) {}

  public get sliderValue(): number {
    return this._sliderValue;
  }

  public set sliderValue(value: number) {
    this._sliderValue = value;
  }

  constructor() { }
}
