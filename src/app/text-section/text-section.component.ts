import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.css'
})
export class TextSectionComponent {

  @Input() text = ''; // decorate the property with @Input()

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    console.log('Element position:', elementPosition);
  }

}


