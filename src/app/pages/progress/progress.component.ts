import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  progress1: number = 70;
  progress2: number = 25;

  get getProgress1() {
    return `${ this.progress1 }%`;
  }

  get getProgress2() {
    return `${ this.progress2 }%`;
  }

}
