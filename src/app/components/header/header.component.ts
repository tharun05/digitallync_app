import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hoverEffect: boolean = false;

  list = [

    { name: "DevOps", route: "devops-course-training-hyderabad" },
    { name: "Azure",route: "azure-course-training-hyderabad" },
    { name: "Python",route: "python-course-training-hyderabad" },
    { name: "Deep Learning",route: "course/deep-learning-course-training-hyderabad" },
    { name: "Big Data",route: "big-data-course-training-hyderabad" },
    { name: "Data Analysis",route: "data-analysis-course-training-hyderabad" },
    { name: "Digital Marketing",route: "digital-marketing-course-training-hyderabad" },
    { name: "3D Animation",route: "animation-course-training-hyderabad" },
    { name: "VFX",route: "vfx-course-training-hyderabad" },
    { name: "IoT",route: "iot-course-training-hyderabad" },
    { name: "AWS",route: "aws-course-training-hyderabad" },
    { name: "Fullstack",route: "fullstack-course-training-hyderabad" },
    { name: "Data Science",route: "data-science-course-training-hyderabad" },
    { name: "Machine Learning",route: "machine-learning-course-training-hyderabad" },
    { name: "Artificial Intelligence",route: "artificial-intelligence-course-training-hyderabad" },
    { name: "Blockchain",route: "blockchain-course-training-hyderabad" },
    { name: "Game Development",route: "game-development-course-training-hyderabad" },
    { name: "Graphic Design",route: "graphic-design-course-training-hyderabad" },
    { name: "UI/UX",route: "ui-ux-course-training-hyderabad" },
  ]

  program=
    {
   placement:[
   {name:"Fullstack Program",route:"fullstack-program"},
   {name:"Fullstack with Java",route:"fullstack-java"},
   {name:"Fullstack with Python",route:"fullstack-python-program"},
   {name:"Python Engineer Program",route:"python-engineer-program"},
   {name:"AI Foundation with Python",route:"AI-python"},
   {name:"Machine Learning Foundation",route:"machine-learning-program"},
   {name:"Blockchian with Python",route:"blockchain-python"},
   {name:"Blockchain with Javascript",route:"blockchain-javascript"},
   {name:"Blockchain Foundation",route:"blockchain-foundation"},
   {name:"Cloud DevOps Engineer",route:"cloud-devops-engineer"},
   {name:"Digital Marketing Executive",route:"digital-marketing-program"},
   ],
   academic:[
   {name:"Foundation Skills in IT",route:"FSIT-Program"},
   {name:"Gaming , AR and VR",route:"Gaming,AR-VR"},
   {name:"CRT Program",route:"CRT"},
   {name:"Get Ready for Hackathon",route:"Hackathon"},
   ]
   
  }
  ;
   


  constructor() {
    console.log(this.list)
   }
   courseEffect() {
    this.hoverEffect = true;
  }

  ngOnInit() {
  }
}
