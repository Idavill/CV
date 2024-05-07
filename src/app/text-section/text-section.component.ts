import { Component, Input, ElementRef, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { TextSectionInterface } from '../text-section-interface';
import { SECTIONS } from '../mock-text/mock-text.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.css'
})
export class TextSectionComponent {
  sections = SECTIONS; // populate with mockdata

  @Input() text:string | boolean | number = ''; // decorate the property with @Input()
  @Output() settingPositions: EventEmitter<number> = new EventEmitter<number>();
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.settingPositions.emit(this.elementRef.nativeElement.getBoundingClientRect().y);
    console.log('Element position:', this.elementRef.nativeElement.getBoundingClientRect().y);
  }

  // ngAfterViewInit() {
  //   this.position.emit(this.elementRef.nativeElement.getBoundingClientRect())
  //   this.position = this.elementRef.nativeElement.getBoundingClientRect();
  //   console.log('Element position:', this.position);
  // }

  //@Output() divInMiddle: EventEmitter<boolean> = new EventEmitter<boolean>();

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   this.checkDivPosition();
  // }

  // checkDivPosition(): void {
  //   const element = this.elementRef.nativeElement.querySelector('.text'); // Replace 'your-div-class' with the actual class of your div
    
  //   if(element != null){
  //     const rect = element.getBoundingClientRect();
  //   const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  //   if(rect.top === null){
  //     console.log("rect is null");
  //   }
  //   else if (rect.top >= 0 && rect.bottom <= viewportHeight) {
  //     this.divInMiddle.emit(true);
  //   } else {
  //     this.divInMiddle.emit(false);
  //   }
  //   }
  // }



}


