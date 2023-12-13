import { Component } from '@angular/core';

@Component({
  selector: 'app-first-model',
  templateUrl: './first-model.component.html',
  styleUrls: ['./first-model.component.css']
})
export class FirstModelComponent {
  name: string = "";

  onShowName(): void {
    alert(this.name);
  }
}
