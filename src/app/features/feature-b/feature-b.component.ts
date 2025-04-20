import { Component, OnInit } from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {SharedStateService} from '../../services/shared-state.service';


@Component({
  selector: 'app-feature-b',
  imports: [
    Slider,
    FormsModule
  ],
  templateUrl: './feature-b.component.html',
  styleUrl: './feature-b.component.css'
})

export class FeatureBComponent implements OnInit {
  word: string = '';

  constructor(
    protected sharedStateService: SharedStateService,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.word = 'delayed Hello World';
    }, 500);
  }
}
