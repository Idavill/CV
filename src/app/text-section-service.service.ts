import { Injectable } from '@angular/core';
import { TextSectionInterface } from './text-section-interface';
import { SECTIONS } from './mock-text/mock-text.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextSectionServiceService {
  sections:Observable<TextSectionInterface[]> = of(SECTIONS);
  offset:number = 200.0;

  constructor() { }

  getSections(): Observable<TextSectionInterface[]> {
    return this.sections;
  }

  setPositions(positions:number[],scrollPositions:number[]):Observable<TextSectionInterface[]>{
    SECTIONS.forEach((section,i) => {
      section.position = positions[i];
      if(i == 0){
        section.scrollPosition = 0; // only for the first section
      } else {
        section.scrollPosition = scrollPositions[i]; // for some reason it works better when first put straight and then with offset
        section.scrollPosition = scrollPositions[i] + this.offset;
      }

    });
    return this.sections;
  }

  setPosition(newPosition:number,id:number):void{
    SECTIONS[id].position = newPosition;
  }

}
