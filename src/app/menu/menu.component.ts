import { Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() headlines: any[] = [];
  positions: Array<number> = [];
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  @Output() divInMiddle: EventEmitter<number> = new EventEmitter<number>();
  divColor:string = "black";

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(){
    console.log("inside constructor", this.headlines);
    this.headlines.forEach(element => {
      this.positions.push(element[3]);
      console.log("added : ",element[3]);
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkDivPosition();
  }

  checkDivPosition(): void{
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
