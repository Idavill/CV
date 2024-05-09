import { TextSectionComponent } from "../text-section/text-section.component";
import { TextSectionInterface } from "../text-section-interface";

export const SECTIONS: TextSectionInterface[] = [
  {
    id:0,
    headline:'about me',
    text:"Since the beginning of my professional journey I’ve been working with design and technology",
    isActive:true,
    position:0,
    scrollPosition:0,
    skillMeta1:[],
    skillList1:[],
    skillMeta2:[],
    skillList2:[],
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
    scrollPosition:0,
    skillMeta1:[
        '/assets/computer.png',
        'computer science',
      ],
    skillList1:
    [
        'C#/.NET',
        'Angular',
        'Python',
        'Typescript',
        'SQL'
    ],
    skillMeta2:[
      '/assets/model.png',
      'architecture & design',
    ],
    skillList2:
    [
        'Figma',
        'Unity',
        'Rhino',
        'AutoCAD',
        'Illustrator',
        'Photoshop',
        'InDesign'
    ],
    iconObject:[],
    iconObject2:[],
    iconObject3:[]
  },
  {
    id:2,
    headline:"education",
    text:"",
    isActive:false,
    position:1200.1953125,
    scrollPosition:0,
    skillMeta1:[],
    skillList1:[],
    skillMeta2:[],
    skillList2:[],
    iconObject:[
      '/assets/ITU.png',
      'IT University Copenhagen',
      'MSc in IT Software Design',
      'September 2020 - February 2023','Professional Focus: Software development including algorithms, database systems and web development. Master’s thesis: A series of designs and high-fidelity prototypes developed for VR multimedia analytics application in active research',
    ],
    iconObject2:[
      '/assets/KADK.png',
      'The Royal Academy - Architecture, Design, Conservation',
      'BA in Arts of Architecture',
      'September 2016 - June 2019',
      'Professional Focus: Design and development of various projects materialized using various AEC relevant softwares',
    ],
    iconObject3:[]
  },
  {
    id:3,
    headline:"experience",
    text:"",
    isActive:false,
    position:1200.1953125,
    scrollPosition:0,
    skillMeta1:[],
    skillList1:[],
    skillList2:[],
    skillMeta2:[],
    iconObject:[
      '/assets/twoday2.png',
      'Twoday',
      'Fullstack Developer',
      'May 2023 - Now',
      'Fullstack developer in SCRUM team to develop features and clarify needs for for various costumers in the private sector including within the pension and finance industry'
    ],
    iconObject2:[
      '/assets/CCO.png',
      'Christensen & Co. Architects',
      'Junior Architect',
      'August 2019 - June 2020',
      'I participated in several project proposals for competitions in the private and public sector conducting 3D and 2D modelling'
    ],
    iconObject3:[
      '/assets/CAFX.png',
      'Copenhagen Architecture Festival',
      'Program Assistant',
      'February 2019 - April 2019',
      'Communication with stakeholders, co-planning and executing events throughout the festival week'
    ],
  },
];
