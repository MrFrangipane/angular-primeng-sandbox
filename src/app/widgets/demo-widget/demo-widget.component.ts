import {Component, OnInit} from '@angular/core';
import {Slider, SliderChangeEvent} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {Panel} from 'primeng/panel';
import {UrlParametersService} from '../../core/services/url-parameters.service';


@Component({
  selector: 'app-demo-widget',
  imports: [
    Slider,
    FormsModule,
    Panel
  ],
  templateUrl: './demo-widget.component.html',
  styleUrl: './demo-widget.component.css'
})

export class DemoWidgetComponent implements OnInit {

  value: number = 0;

  constructor(
    private urlParametersService: UrlParametersService,
  ) {
    this.urlParametersService.registerParameterNames(['sliderValue'])
  }

  ngOnInit() {
    this.value = this.urlParametersService.getValue('sliderValue', Number) ?? 0
  }

  onSliderChange($event: SliderChangeEvent) {
    this.urlParametersService.setValue(
      'sliderValue',
      $event.value?.toString() ?? ''
    )
  }
}
