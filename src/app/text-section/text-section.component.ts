import { Component, ViewChildren, QueryList, Renderer2, Directive, ElementRef } from '@angular/core';
import { TextSectionInterface } from '../text-section-interface';
import { NgFor } from '@angular/common';
import { TextSectionServiceService } from '../text-section-service.service';
//import { TextComponent } from '../text/text.component';

// @Directive({selector: 'app-text'})
// class ChildDirective {}

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.css'
})
export class TextSectionComponent {
  sections: TextSectionInterface[] = []; // populate with data using service
  constructor(private elementRef: ElementRef,private textSectionService: TextSectionServiceService) { }
  //@ViewChildren(ChildDirective) viewChildren!: QueryList<ChildDirective>;
  getSections(): void {
    this.sections = this.textSectionService.getSections();
  }
  ngOnInit(): void {
    this.getSections();
  }

  // setPositions(){
  //   this.textSectionService.setPosition(this.elementRef.nativeElement.getBoundingClientRect().y,0);
  // }


  // ngAfterViewInit() {
  //   //console.log("children === ", this.viewChildren);
  //   //console.log('Element position:', this.elementRef.nativeElement.getBoundingClientRect());
  //   console.log("ng after view init");
  //   // console.log(this.elements);
  //   // this.elements.forEach((element) => {
  //   //   const posY = element.nativeElement.getBoundingClientRect().top;
  //   //   console.log('Y Position:', posY);
  //   // });
  // }

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


