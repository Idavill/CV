import { TextSectionComponent } from "../text-section/text-section.component";
import { TextSectionInterface } from "../text-section-interface";

export const SECTIONS: TextSectionInterface[] = [
  {
    id:0,
    headline:'about me',
    text:"Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology.",
    isActive:false,
    position:50.2265625,
    imagepaths:[],
    imageText:[],

  },
  {
    id:1,
    headline:"skills",
    text:"Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology.",
    isActive:false,
    position:700.2109375,
    imagepaths:['/assets/computer.png','/assets/model.png'],
    imageText:['computer science', 'design and architecture']
  },
  {
    id:2,
    headline:"experience",
    text:"Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology.",
    isActive:false,
    position:1200.1953125,
    imagepaths:[],
    imageText:[],

  },
];
