import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // @Input('valor') progress: number = 50; --> Podemos renombrar la variable con el nombre ('valor')
  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-info';

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value < 0) {
      this.outputValue.emit(0);
      return (this.progress = 0);
    }

    this.progress = this.progress + value;
    return this.outputValue.emit(this.progress);
  }

  onChange(inputValue: number) {
    if (inputValue >= 100) {
      this.progress = 100;
    } else if (inputValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = inputValue;
    }

    this.outputValue.emit(this.progress);
  }
}
