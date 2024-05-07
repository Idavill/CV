import { Component, Input } from '@angular/core';
import { CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() imagePaths:string[] = [];
  @Input() textDescription:string = '';
  @Input() imageText:string[] = [];

  isEmpty(value: any): boolean {
    return (
      value == null || // Checks for null or undefined
      value.length === 0 // Checks for empty string or empty array
    );
  }

}
