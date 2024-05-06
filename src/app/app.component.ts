import { Component, ElementRef, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextSectionComponent } from './text-section/text-section.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TextSectionComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Hi, Im Ida';
  firstSection = ['about me', "Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology.",false,158.2265625];
  secondSection = ["skills", "Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology.",false,258.2109375];
  thirdSection = ["experience", "Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology.",false,358.1953125];

  headlines: any[] = [this.firstSection,this.secondSection,this.thirdSection];

}
