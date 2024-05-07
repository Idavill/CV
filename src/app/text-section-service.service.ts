import { Injectable } from '@angular/core';
import { TextSectionInterface } from './text-section-interface';
import { SECTIONS } from './mock-text/mock-text.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextSectionServiceService {
  sections:Observable<TextSectionInterface[]> = of(SECTIONS);
  offset:number = 0;

  constructor() { }

  getSections(): Observable<TextSectionInterface[]> {
    return this.sections;
  }

  setPositions(positions:number[]):Observable<TextSectionInterface[]>{

    SECTIONS.forEach((section,i) => {
      section.position = positions[i] ;
    });
    return this.sections;
  }

  // setPositions(positions:number[]):Observable<TextSectionInterface[]>{
  //   if (positions[0] < 0){
  //     this.offset = positions[0] * -1;
  //   }
  //   SECTIONS.forEach((section,i) => {
  //     section.position = positions[i] + this.offset + 500;
  //   });
  //   return this.sections;
  // }

  setPosition(newPosition:number,id:number):void{
    SECTIONS[id].position = newPosition;
  }

}
