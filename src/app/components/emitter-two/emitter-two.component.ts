import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitter-two',
  templateUrl: './emitter-two.component.html',
  styleUrls: ['./emitter-two.component.css']
})
export class EmitterTwoComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter<any>();

  handleClick(): void {
    this.changeNumber.emit();
    console.log('...');
  }
}
