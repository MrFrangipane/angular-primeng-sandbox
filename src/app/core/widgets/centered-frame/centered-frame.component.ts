import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-centered-frame',
  imports: [],
  templateUrl: './centered-frame.component.html',
  styleUrl: './centered-frame.component.css'
})
export class CenteredFrameComponent {
  @Input() contentClass: string = "";
  @Input() wrapperClass: string = "";
}
