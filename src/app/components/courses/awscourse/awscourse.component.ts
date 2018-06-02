import { Component, OnInit,Input,Inject,SimpleChange, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Props } from '../../../apex/common/props';
import {Meta, Title} from '@angular/platform-browser';
import {routes} from "../../../app-routing.module";
import {Router, ActivatedRoute} from "@angular/router";
import { Page } from '../../../apex/entities/page.entity';
import { ContactForm } from '../courses.form';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from "@angular/platform-browser";
import {CoursesService} from '../courses.service';
import { Contact } from '../../../apex/entities/contact.entity';
// import { WINDOW } from "../window.service";


@Component({
  selector: 'app-awscourse',
  templateUrl: './awscourse.component.html',
  styleUrls: ['./awscourse.component.scss']
})
export class AwscourseComponent implements OnInit {
  page: Page = new Page();
  myForm: any = ContactForm.init();
  isShowModal:boolean = true;
  showForm:boolean = false;
  UserDetailsForm: FormGroup;
  isScrolled: any;
  stickyFooter: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobilePattern = '^[6-9][0-9]{9}$';
  namePattern = '[a-zA-Z ]+$';
  courseName: any='AWS';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 AWS Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking AWS Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'AWS Training in Hyderabad | AWS Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'AWS training in hyderabad, AWS course in hyderabad, AWS certification in Hyderabad, AWS training institute in Hyderabad, digital lync'});
  
    title.setTitle('AWS Training in Hyderabad | AWS Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="aws-course-training-hyderabad";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "AWS", 
    description : "AWS Course", 
    courseType : "Both", 
    duration : "8 Weeks", 
    hours : 5, 
    why : "Experience our expertise on Cloud by understanding the core concepts of AWS", 
    whyImage : "why-learn-AWS-digital-lync.png", 
    whyImageAlt : "why learn AWS", 
    careerHead : "AWS is a leading and dynamic cloud platform with a growing business. Candidates can choose their career as :", 
    courseImage : "AWS-digital-lync.png", 
    courseImageAlt : "AWS", 
    views :5750, 
    share : 123,  
    slug : "aws-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Aws.pdf",  
    careers : [
        "Enterprise Architect",
        "Solution Architect & Cloud Developer",
    ], 
    pre : [
        "Enthusiasm to learn and explore No Specific Requirements"
      
    ],
    subModules:[
      { 
        name : "Getting started with AWS Cloud", 
        description : "Cloud Computing, Register & Login to AWS Cloud", 
        image : "assets/images/courses/awscourse/modules.svg", 
        imageAlt : ""
    },
    { 
      name : "Identity Access Management (IAM)", 
      description : "About IAM, User & Group Management", 
      image : "assets/images/courses/awscourse/modules.svg", 
      imageAlt : ""
    },
    { 
      name : "Simple Storage Service (S3)", 
      description : "S3 Overview, Cross Region Replication, Cloud Front CDN Overview", 
      image : "assets/images/courses/awscourse/modules.svg", 
      imageAlt : ""
  },
  { 
    name : "Elastic Compute Cloud(EC2)",  
    description : "EC2 Creating and Launching Linux & Windows Servers, AMIs - EBS Root Device Volumes vs Instance Store", 
    image : "assets/images/courses/awscourse/modules.svg", 
    imageAlt : ""
},{  
  name : "Route53 (DNS)", 
  description : "Route 53 Register A Domain Name Lab, Weighted Routing Policy Lab, Latency Routing Policy Lab", 
  image : "assets/images/courses/awscourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Databases on AWS", 
  description : "RDS - Back Ups, Multi-AZ & Read Replicas, DynamoDB, RedShift", 
  image : "assets/images/courses/awscourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "Virtual Private Cloud(VPC)", 
  description : "IPV4 Vs IPV6, Network Address Translation (NAT), Access Control Lists (ACLs)", 
  image : "assets/images/courses/awscourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "AWS Architected Framework", 
  description : "Setting Up EC2, Adding Resilience And Cloudfront, Setting Up Our AMIs", 
  image : "assets/images/courses/awscourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Future of AWS", 
  description : "Reliability, Performance Efficiency, Cost Optimization", 
  image : "assets/images/courses/awscourse/modules.svg", 
  imageAlt : ""
}
    
    ],
    projects:[
      { 
        name : "Host a Static Website on AWS Cloud", 
        description : "Static websites deliver HTML, JavaScript, images, videos and other files to your website visitors, and contain no application code. They are best for sites with few authors and relatively infrequent content changes, typically personal and simple marketing websites. Static websites are very low cost, provide high-levels of reliability, require almost no IT administration, and scale to handle enterprise-level traffic with no additional work.", 
        image : "assets/images/courses/awscourse/aws-project-digital-lync.jpg", 
        imageAlt : "digitalmarketing", 
    },
    {
      name: "Build & Launch a fault tolerant wordpress site Deploy and host a production-ready WordPress website on AWS",
      description:"In this project, you will learn how to deploy and host WordPress, an open-source blogging tool and content management system (CMS) based on PHP and MySQL. You will implement an architecture to host WordPress for a production workload with minimal management responsibilities required from you. To accomplish this, you will use AWS Elastic Beanstalk and Amazon Relational Database Service (RDS). Once you upload the WordPress files, Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. Amazon RDS provides cost-efficient and resizable capacity, while managing time-consuming database administration tasks for you.",
      image: "assets/images/courses/awscourse/aws-project2-digital-lync.png",
      imageAlt:"digitalmarketing",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="aws-course-training-hyderabad";
    this.page.slug="aws-course-training-hyderabad";
    this.coursesService.saveForm(this.profile).subscribe((data: any) => {
      console.log(data);
      if (data.status == '1') {
        setTimeout(function () {
        }, 2000);
        this.coursesService.navigateToThanksPage();
      }
    })
  }
  
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;
  }
  
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event) {
  //   let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   if (number > 912) {
  //     this.isScrolled = true;  
  //   } 
  //   else {
  //     this.isScrolled = false;
  //   }
  //   if (number > 1168 && number < 4900) {
  //     this.stickyFooter = true
  //   } else {
  //     this.stickyFooter = false
  //   }
  //   if(number > 1036){
  //     this.enrollBtn = true;
  //   }else{
  //     this.enrollBtn = false;
  //   }
  // }
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

