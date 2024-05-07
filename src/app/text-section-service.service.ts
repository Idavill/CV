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

}
