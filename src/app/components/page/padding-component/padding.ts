import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-components-page-padding-component',
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true,
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.css']
})
export class PaddingComponent {
  paddingValue = 1;
}
