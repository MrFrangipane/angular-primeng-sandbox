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
      for (let i = 0; i < 1000; i++) {
        this.word += 'delayed multiple Hello World ';
      }
    }, 500);
  }
}
