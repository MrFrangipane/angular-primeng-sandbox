import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  public isMobile: boolean = false;

  constructor() { }

  update() {
    // todo not sure the if is necessary
    let isMobile = window.innerWidth <= 768;
    if (isMobile !== this.isMobile) {
      this.isMobile = isMobile;
    }
  }
}
