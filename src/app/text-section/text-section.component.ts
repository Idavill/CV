import { Component, Input, ElementRef, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.css'
})
export class TextSectionComponent {

  @Input() text:string | boolean | number = ''; // decorate the property with @Input()
  @Input() pseudoHeadline: string | boolean | number= '';
  
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    console.log('Element position:', elementPosition);
  }

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


