import {Component} from '@angular/core';
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

export class DemoWidgetComponent {

  value: number = 0;

  constructor(
    private urlParametersService: UrlParametersService,
  ) {
    console.log("DEMO WIDGET CONS")
    this.urlParametersService.registerParameterNames(['sliderValue'])
  }

  onSliderChange($event: SliderChangeEvent) {
    this.urlParametersService.setValue(
      'sliderValue',
      $event.value?.toString() ?? ''
    )
  }
}
