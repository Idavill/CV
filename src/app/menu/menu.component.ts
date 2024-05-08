import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSectionServiceService } from '../text-section-service.service';
import { TextSectionInterface } from '../text-section-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent {
  sections:TextSectionInterface[] = [];
  positions:number[] = [];
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  @Output() divInMiddle: EventEmitter<number> = new EventEmitter<number>();
  divColor:string = "black";
  dataSubscription: Subscription = new Subscription;
  settingDataSubscription: Subscription = new Subscription;

  constructor(private elementRef: ElementRef,private textSectionService: TextSectionServiceService) {
  }

  getSections(): void {
    this.textSectionService.getSections()
        .subscribe(sections => {
          this.sections = sections
        })
  }

  setPosition():void {
    this.settingDataSubscription = this.textSectionService.setPositions([0,0,0])
    .subscribe(data => {
      this.sections = data;
    });
  }

  ngOnInit(){
    this.getSections();
    this.setPosition();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkPosition();
  }

  moveToSection(position:number):void{
    console.log(position);
    window.scrollTo(0,position);
  }

  checkPosition(): void{
    console.log("Checking position");
    if(this.sections[0].position >= 0 && this.sections[0].position >= window.scrollY){
      this.sections[0].isActive = true;
      this.sections[1].isActive = false;
      this.sections[2].isActive = false;
      this.sections[3].isActive = false;
    } else if (this.sections[1].position >= this.sections[0].position && this.sections[1].position >= window.scrollY){
      this.sections[0].isActive = false;
      this.sections[1].isActive = true;
      this.sections[2].isActive = false;
      this.sections[3].isActive = false;
    } else if (this.sections[2].position >= this.sections[1].position && this.sections[2].position >= window.scrollY){
      this.sections[0].isActive = false;
      this.sections[1].isActive = false;
      this.sections[2].isActive = true;
      this.sections[3].isActive = false;
    } else if (this.sections[3].position >= this.sections[2].position && this.sections[3].position >= window.scrollY){
      this.sections[0].isActive = false;
      this.sections[1].isActive = false;
      this.sections[2].isActive = false;
      this.sections[3].isActive = true;
    }
  }
}
