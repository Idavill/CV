import { Component, ViewChildren, QueryList, Renderer2, Directive, ElementRef, ViewChild } from '@angular/core';
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
  private previousItemCount = 0;

  getSections(): void {
    this.textSectionService.getSections()
        .subscribe(sections => {
          this.sections = sections;
        })
  }

  setSections(positions:number[]){
    this.textSectionService.setPositions(positions);
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
    this.itemElements.forEach((element, index) => {
      //console.log(`Element ${index + 1}: `, element.nativeElement.textContent);
      tempPosition.push(element.nativeElement.getBoundingClientRect().y);
    });
    this.setSections(tempPosition);
    console.log("new positions:",tempPosition);
  }

  ngDoCheck() {
    if (this.itemElements && this.previousItemCount !== this.itemElements.length) {
      this.previousItemCount = this.itemElements.length;
      this.callMethodForEachItem();
    }
  }
}


