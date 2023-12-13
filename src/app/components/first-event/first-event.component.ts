import { Component } from '@angular/core';

@Component({
  selector: 'app-first-event',
  templateUrl: './first-event.component.html',
  styleUrls: ['./first-event.component.css']
})
export class FirstEventComponent {
  show: boolean = false;
  /**
   * Exibir mensagem
   */
  onShowMessage(): void {
    this.show = !this.show;
  }
}
