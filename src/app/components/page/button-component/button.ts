// src/app/components/page/button-component/button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-components-page-button-component',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  handleClick(): void {
    alert("You had clicked a button!!!")
  }
}
