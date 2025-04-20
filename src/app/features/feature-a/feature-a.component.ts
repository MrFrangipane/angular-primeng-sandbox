import { Component, OnInit } from '@angular/core';
import {Slider} from 'primeng/slider';
import {SharedStateService} from '../../services/shared-state.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-feature-a',
  imports: [
    Slider,
    FormsModule
  ],
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.css'
})

export class FeatureAComponent implements OnInit {
  word: string = '';

  constructor(
    protected sharedStateService: SharedStateService,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      for (let i = 0; i < 1000; i++) {
        this.word += 'delayed multiple Hello World ';
      }
    }, 500);
  }
}
