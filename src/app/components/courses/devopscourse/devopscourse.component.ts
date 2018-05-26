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
    image : "../../../assets/images/linux-digital-lync.svg", 
    imageAlt : "Linux"
},
{ 
  name : "Jenkins", 
  description : "Jenkins provides hundreds of plugins to support building, deploying and automating any project.", 
  image : "../../../assets/images/jenkins-digital-lync.svg", 
  imageAlt : "Jenkins"
},
{
  name:"Git",
  description:"Fast and Flexible distributed Version Control Tool. Allows to experiment new feature without interfering with working code.",
  image:"../../../assets/images/git-digital-lync.svg",
  imageAlt:"Git"
},
{
  name:"Lamp",
  description:"Linux-Apache-MySQL-PHP technology is open source and highly secure, while running on a LINUX operating system.",
  image:"../../../assets/images/lamp-digital-lync.svg",
  imageAlt:"Lamp"
},
{
  name:"Chef",
  description:"Strong choice for experienced DevOps Teams to automate development and deployment infrastructure.",
  image:"../../../assets/images/chef-digital-lync.svg",
  imageAlt:"Chef"
},
{
  name:"Docker",
  description:"Docker is a computer program that performs operating-system-level virtualization also known as containerization.",
  image:"../../../assets/images/docker-digital-lync.svg",
  imageAlt:"Docker"
},
{
  name:"Maven",
  description:"MAVEN has the ability to create project structure. Maven can generate documentation for the project.",
  image:"../../../assets/images/maven-digital-lync.svg",
  imageAlt:"Maven"
},
{
  name:"Vagrant",
  description:"Allows building and managing virtual machine environments.",
  image:"../../../assets/images/vagrant-digital-lync.svg",
  imageAlt:"Vagrant"
},
{
  name:"Nagios",
  description:"Nagios is recognized as the top solution to monitor servers. It is fully capable of monitoring Windows servers, Linux servers.",
  image:"../../../assets/images/nagios-digital-lync.svg",
  imageAlt:"Nagios"
},
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
