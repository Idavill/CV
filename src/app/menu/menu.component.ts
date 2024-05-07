import { Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSectionServiceService } from '../text-section-service.service';
import { TextSectionInterface } from '../text-section-interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent {
  sections:TextSectionInterface[] = [];
  @Input() headlines: any[] = [];
  positions: Array<number> = []; // keep
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  @Output() divInMiddle: EventEmitter<number> = new EventEmitter<number>();
  divColor:string = "black";

  constructor(private elementRef: ElementRef,private textSectionService: TextSectionServiceService) {
  }

  getSections(): void {
    this.sections = this.textSectionService.getSections();
  }

  ngOnInit(){
    this.getSections();
    
    this.sections.forEach(section => {
      this.positions.push(section.position);
      console.log("added : ",section.position);
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkPosition();
  }

  checkPosition(): void{
    console.log("Checking position");
    if(this.positions[0] >= 0 && this.positions[0] >= window.scrollY){
      this.headlines[0][2] = true;
      this.headlines[1][2] = false;
      this.headlines[2][2] = false;
    } else if (this.positions[1] >= this.positions[0] && this.positions[1] >= window.scrollY){
      this.headlines[0][2] = false;
      this.headlines[1][2] = true;
      this.headlines[2][2] = false;
    } else if (this.positions[2] >= this.positions[1] && this.positions[2] >= window.scrollY){
      this.headlines[0][2] = false;
      this.headlines[1][2] = false;
      this.headlines[2][2] = true;
  }
  }

  emitMiddleEvent(){

  }
  // checkDivPosition(): void {
  //   console.log("checkingDicposition");
  //   const element = this.elementRef.nativeElement.querySelector('.about'); // Replace 'your-div-class' with the actual class of your div
    
  //   if(element != null){
  //     const rect = element.getBoundingClientRect();
  //     const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  //   if(rect.top === null){
  //     console.log("rect is null");
  //   }
  //   else if (rect.top >= 0 && rect.bottom <= viewportHeight) {
      
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // }
  // }

}
