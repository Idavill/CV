import { Component } from '@angular/core';
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
  firstSection = ['about me', "text about me"];
  secondSection = ["skills", "skills that i have"];
  thirdSection = ["experience", "lots and lots of experience"];

  headlines: string[] = [this.firstSection[0],this.secondSection[0],this.thirdSection[0]]

}
