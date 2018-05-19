import { Component, OnInit } from '@angular/core';
import { Props } from '../../../apex/common/props';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-fullstackcourse',
  templateUrl: './fullstackcourse.component.html',
  styleUrls: ['./fullstackcourse.component.scss']
})
export class FullstackcourseComponent implements OnInit {
  imageHost=Props.IMAGE_HOST;
  constructor(private meta: Meta,private title: Title,) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Full Stack Development Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Full Stack Development Certification Course @ Digtial Lync'});
      this.meta.updateTag(
        {name: 'Title', content: 'Full Stack Development Training In Hyderabad | Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Full Stack Development training in hyderabad, Full Stack Development course in hyderabad, Full Stack Development in Hyderabad, Full Stack Development training institute in Hyderabad, digital lync'});
    title.setTitle('Full Stack Development Training In Hyderabad | Certification Course | Digital Lync');
  }
  bannerData:any= [
    {
      heading:'Fullstack Step into online platform for Bright Career!',
      img:'../../../../assets/images/programs_banner.png'
  }
  ];
  courseData={ 
    name: "Fullstack", 
    description : "Fullstack Course", 
    courseType : "Both", 
    duration : "20 Weeks", 
    hours : 5, 
    why : "Fullstack is the combination of Cultural Philosophies, Practices and Tools that increases an Organizations ability to deliver applications and services at high velocity evolving and improving products.", 
    whyImage : "why-learn-aws-digital-lync.png", 
    whyImageAlt : "why learn Fullstack", 
    careerHead : "Being a specialist in DevOps, one needs to integrate a happy balance between the operations and the development team.", 
    courseImage : "devops-digital-lync.png", 
    courseImageAlt : "Devops", 
    views :5750, 
    share : 123,  
    slug : "fullstack-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Devops.pdf",  
    careers : [
        "Fullstack Engineer", 
        "Build & Release Engineer"
    ], 
    pre : [
        "Linux Essentials", 
        "Understanding of SDLC and Agile"
    ]
  }
  ngOnInit() {
    
  }

}
