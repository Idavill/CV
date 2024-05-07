import { Injectable } from '@angular/core';
import { TextSectionInterface } from './text-section-interface';
import { SECTIONS } from './mock-text/mock-text.component';

@Injectable({
  providedIn: 'root'
})
export class TextSectionServiceService {

  constructor() { }

  getSections(): TextSectionInterface[] {
    return SECTIONS;
  }

  setPositions(positions:number[]):void{
    SECTIONS.forEach((section,i) => {
      section.position = positions[i]
    });
  }

  setPosition(newPosition:number,id:number):void{
    SECTIONS[id].position = newPosition;
  }

}
