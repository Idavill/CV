import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, NgFor} from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule,NgIf,NgFor],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() isActive:boolean=false;
  @Input() imagePaths:string[] = [];
  @Input() textDescription:string = '';
  @Input() imageText:string[] = [];
  @Input() iconObject:string[] = [];
  @Input() iconObject2:string[] = [];
  @Input() iconObject3:string[] = [];
  @Input() skillList1:string[] = [];
  @Input() skillList2:string[] = [];
  @Input() skillMeta1:string[] = [];
  @Input() skillMeta2:string[] = [];
  @Input() skillLevel1:string[] = [];
  @Input() skillLevel2:string[] = [];

  isEmpty(value: any): boolean {
    return (
      value == null || // Checks for null or undefined
      value.length === 0 // Checks for empty string or empty array
    );
  }

}
