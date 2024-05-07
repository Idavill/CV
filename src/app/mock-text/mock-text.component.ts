import { TextSectionComponent } from "../text-section/text-section.component";
import { TextSectionInterface } from "../text-section-interface";

export const SECTIONS: TextSectionInterface[] = [
  {
    id:0,
    headline:'about me',
    text:"Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology. Since the beginning of my professional journey I’ve been working with design and technology.",
    isActive:false,
    position:50.2265625,
    iconObject:[],
    iconObject2:[],
    iconObject3:[]
  },
  {
    id:1,
    headline:"skills",
    text:"",
    isActive:false,
    position:700.2109375,
    iconObject:[
        '/assets/computer.png',
        'computer science'
    ],
    iconObject2:[
      '/assets/model.png',
      'architecture & design'
    ],
    iconObject3:[]
  },
  {
    id:2,
    headline:"education",
    text:"",
    isActive:false,
    position:1200.1953125,
    iconObject:[
      '/assets/ITU.png',
      'IT University Copenhagen'
    ],
    iconObject2:[
      '/assets/KADK.png',
      'The Royal Danish Academy of Copenhagen'
    ],
    iconObject3:[]
  },
  {
    id:3,
    headline:"experience",
    text:"",
    isActive:false,
    position:1200.1953125,
    iconObject:[
      '/assets/twoday2.png',
      'Twoday - Fullstack Developer',
      'May 2023 - Now',
      'Fullstack developer in SCRUM team to develop features and clarify needs for for various costumers in the private sector including within the pension and finance industry'
    ],
    iconObject2:[
      '/assets/CCO.png',
      'Christensen & Co. Architects - Junior Architect',
      'August 2019 - June 2020',
      'I participated in several project proposals for competitions in the private and public sector conducting 3D and 2D modelling'
    ],
    iconObject3:[
      '/assets/CAFX.png',
      'Copenhagen Architecture Festival - Program Assistant',
      'February 2019 - April 2019',
      'Communication with stakeholders, co-planning and executing events throughout the festival week'

    ],
  },
];
