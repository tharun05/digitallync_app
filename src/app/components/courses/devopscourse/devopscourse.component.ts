import { Component, OnInit } from '@angular/core';
import { Props } from '../../../apex/common/props';
import {Meta, Title} from '@angular/platform-browser';
import {routes} from "../../../app-routing.module";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-devopscourse',
  templateUrl: './devopscourse.component.html',
  styleUrls: ['./devopscourse.component.scss']
})
export class DevopscourseComponent implements OnInit {

  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 DevOps Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking DevOps Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'DevOps Training in Hyderabad | DevOps Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'DevOps training in hyderabad, DevOps course in hyderabad, DevOps certification in Hyderabad, DevOps training institute in Hyderabad, digital lync'});
  
    title.setTitle('DevOps Training in Hyderabad | DevOps Certification Course | Digital Lync');
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
      heading:'DevOps Too, So, Step into online platform for Bright Career!',
      img:'../../../../assets/images/programs_banner.png'
  }
  ];
courseData={ 
    name: "DevOps", 
    description : "DevOps Course", 
    courseType : "Both", 
    duration : "9 Weeks", 
    hours : 5, 
    why : "DevOps is the combination of Cultural Philosophies, Practices and Tools that increases an Organizations ability to deliver applications and services at high velocity evolving and improving products.", 
    whyImage : "why-learn-devops-digital-lync.png", 
    whyImageAlt : "why learn DevOps", 
    careerHead : "Being a specialist in DevOps, one needs to integrate a happy balance between the operations and the development team.", 
    courseImage : "devops-digital-lync.png", 
    courseImageAlt : "Devops", 
    views :5750, 
    share : 123,  
    slug : "devops-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Devops.pdf",  
    careers : [
        "DevOps Engineer", 
        "Build & Release Engineer"
    ], 
    pre : [
        "Linux Essentials", 
        "Understanding of SDLC and Agile"
    ]
  }
subModules=[
  { 
    name : "Linux", 
    description : "Linux is an open source operating system which is incredibly customizable.", 
    image : "linux-digital-lync.svg", 
    imageAlt : "Linux"
},
{ 
  name : "Jenkins", 
  description : "Jenkins provides hundreds of plugins to support building, deploying and automating any project.", 
  image : "jenkins-digital-lync.svg", 
  imageAlt : "Jenkins"
}

]

  ngOnInit() {
  //   this.routes.events
  // .filter((event) => event instanceof NavigationEnd)
  // .map(() => this.activatedRoute)
  // .map((route) => {
  //   while (route.firstChild) route = route.firstChild;
  //   return route;
  // })
  // .filter((route) => route.outlet === 'primary')
  // .mergeMap((route) => route.data)
  // .subscribe((event) => {
  //   this._seoService.updateTitle(event['title']);
  //   //Updating Description tag dynamically with title
  //   this._seoService.updateDescription(event['title'] + event['description'])
  // });

  }

}
