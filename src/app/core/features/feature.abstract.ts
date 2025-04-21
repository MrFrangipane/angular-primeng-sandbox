import {Component, OnInit} from '@angular/core';

import {UrlParametersService} from '../services/url-parameters.service';


@Component({
  selector: 'abstract-feature',
  template: ''
})

export abstract class AbstractFeature implements OnInit {

  constructor(
    protected urlParametersService: UrlParametersService,
  ) {
    this.urlParametersService.registerParameterNames(this.getRegisteredUrlParameterNames())
  }

  protected getRegisteredUrlParameterNames(): string[] {
    return [];
  }

  ngOnInit() {
    this.urlParametersService.cleanUrl();
    this.onInit()
  }

  protected abstract onInit(): void
}
