import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feature-b',
  imports: [],
  templateUrl: './feature-b.component.html',
  styleUrl: './feature-b.component.css'
})

export class FeatureBComponent implements OnInit {

  word: string = '';

  ngOnInit() {
    setTimeout(() => {
      this.word = 'delayed Hello World';
    }, 500);
  }
}
