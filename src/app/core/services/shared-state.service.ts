import {Injectable} from '@angular/core';
import {UrlParametersService} from './url-parameters.service';


@Injectable({
  providedIn: 'root'
})

export class SharedStateService {
  private _sliderValue: number = 0;

  constructor(
    private urlParametersService: UrlParametersService,
  ) {
    this.sliderValue = this.urlParametersService.getValue('sliderValue', 0);
  }

  public get sliderValue(): number {
    return this._sliderValue;
  }

  public set sliderValue(value: number) {
    this.urlParametersService.updateUrlParameters({sliderValue: value.toString()})
    this._sliderValue = value;
  }
}
