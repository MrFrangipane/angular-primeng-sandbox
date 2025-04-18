import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feature-a',
  imports: [],
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.css'
})

export class FeatureAComponent implements OnInit {

  word: string = '';

  ngOnInit() {
    setTimeout(() => {
      this.word = 'delayed Hello World';
    }, 500);
  }
}
