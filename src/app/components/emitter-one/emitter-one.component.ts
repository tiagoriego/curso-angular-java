import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter-one',
  templateUrl: './emitter-one.component.html',
  styleUrls: ['./emitter-one.component.css']
})
export class EmitterOneComponent {
  numero: number = 0;

  onChangeNumber(): void {
    this.numero = Math.floor(Math.random() * 100);
  }
}
