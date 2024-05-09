import { Component, ViewChildren, QueryList, Renderer2, Directive, ElementRef, ViewChild, Output } from '@angular/core';
import { TextSectionInterface } from '../text-section-interface';
import { NgFor } from '@angular/common';
import { TextSectionServiceService } from '../text-section-service.service';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [NgFor,TextComponent],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.css'
})
export class TextSectionComponent {
  sections: TextSectionInterface[] = []; // populate with data using service
  constructor(private elementRef: ElementRef,private textSectionService: TextSectionServiceService) { }
  @ViewChildren('myElement') itemElements!: QueryList<ElementRef>;
  @ViewChildren('scrollHere') scrollPosition!: QueryList<ElementRef>;
  scrollPositions:number[] = [];

  private previousItemCount = 0;
  private previousScrollPositionCount = 0;

  getSections(): void {
    this.textSectionService.getSections()
        .subscribe(sections => {
          this.sections = sections;
          console.log("inside menu sectinos are: ", sections);
        })
  }

  setSections(positions:number[],scrollPosition:number[]){
    this.textSectionService.setPositions(positions,scrollPosition);
  }

  ngOnInit(): void {
    this.getSections();
  }

  ngAfterViewInit() {
    this.itemElements.changes.subscribe(() => {
      this.callMethodForEachItem();
    });
  }

  callMethodForEachItem() {
    const tempPosition:number[] = [];
    const tempScrollPositions:number[] = [];
    this.itemElements.forEach((element, index) => {
      if(index%2){
        tempPosition.push(element.nativeElement.getBoundingClientRect().y);
      } else {
        tempScrollPositions.push(element.nativeElement.getBoundingClientRect().y);
      }
    });
    console.log("these are the positions being set: ", tempPosition);
    this.setSections(tempPosition,tempScrollPositions);
  }

  // setScrollPosition() {
  //   const tempPosition:number[] = [];
  //   this.scrollPosition.forEach((element, index) => {
  //     tempPosition.push(element.nativeElement.getBoundingClientRect().y);
  //   });
  //   this.scrollPositions = tempPosition;
  //   console.log("scrolling position",this.scrollPositions);
  // }

  ngDoCheck() {
    if (this.itemElements && this.previousItemCount !== this.itemElements.length) {
      this.previousItemCount = this.itemElements.length;
      this.callMethodForEachItem();
    }
    // if (this.scrollPosition && this.previousScrollPositionCount !== this.scrollPosition.length) {
    //   this.previousScrollPositionCount = this.scrollPosition.length;
    //   this.setScrollPosition();
    // }
  }
}


