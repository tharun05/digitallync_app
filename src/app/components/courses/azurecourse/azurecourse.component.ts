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
  selector: 'app-azurecourse',
  templateUrl: './azurecourse.component.html',
  styleUrls: ['./azurecourse.component.scss']
})
export class AzurecourseComponent implements OnInit {
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
  courseName: any='Azure';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Azure Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Azure Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Azure Training in Hyderabad | Azure Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Azure training in hyderabad, Azure course in hyderabad, Azure certification in Hyderabad, Azure training institute in Hyderabad, digital lync'});
  
    title.setTitle('Azure Training in Hyderabad | Azure Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="azure-course-training-hyderabad";
    this.page.name="Azure";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Azure", 
    description : "Azure Course", 
    courseType : "Both", 
    duration : "4 Weeks", 
    hours : 5, 
    why : "Azure is a platform which is productive and innovative for delivering products of best quality. The course content helps you to prepare for the MS Azure 70-533 Certification.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Azure", 
    careerHead : "", 
    courseImage : "Azure-digital-lync.png", 
    courseImageAlt : "Azure", 
    views :5750, 
    share : 123,  
    slug : "azure-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Fullstack.pdf",  
    careers : [
        "Solutions Architect",
        "Technical Architect"
    ], 
    pre : [
        "Fundamental knowledge of computer systems, development, database, VMs and networking."
    ],
    subModules:[
      { 
        name : "Getting started", 
        description : "cloud computing,Azure,Managing Azure,Subscription management", 
        image : "assets/images/courses/azurecourse/modules.svg", 
        imageAlt : ""
    },
    { 
      name : "Creating virtual networks", 
      description : "virtual networks,Configuring Azure networking,CIDR Block/Address space", 
      image : "assets/images/courses/azurecourse/modules.svg", 
      imageAlt : ""
    },
    { 
      name : "Virtual machines in Microsoft Azure", 
      description : "Leverage the Azure VM HA concepts,VMs placements using Fault", 
      image : "assets/images/courses/azurecourse/modules.svg", 
      imageAlt : ""
  },
  { 
    name : "Azure VM High Availability(HA)",  
    description : "Python is a high level and object oriented scripting language. It is used as general purpose programming language.", 
    image : "assets/images/courses/azurecourse/modules.svg", 
    imageAlt : ""
},{  
  name : "Azure VM scale sets (VMSS)", 
  description : "Understand how the VMSS works,Auto scale the VMs based on CPU usage.", 
  image : "assets/images/courses/azurecourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Cloud storage", 
  description : "Understanding cloud storage,Create and manage storage", 
  image : "assets/images/courses/azurecourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Advanced Azure vNets", 
  description : "Understand the VPN protocols,Types of azure VPN", 
  image : "assets/images/courses/azurecourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Load Balancer", 
  description : "Understand how load balancer works,Types of Azure load balancers", 
  image : "assets/images/courses/azurecourse/modules.svg", 
  imageAlt : ""
},{ 
  name : "Azure App services", 
  description : "Understand how to swap dev workloads to prod without the downtime", 
  image : "assets/images/courses/azurecourse/modules.svg", 
  imageAlt : ""
},
{ 
  name : "SDK – SQL Databases", 
  description : "Azure powershell basics,Deploy the VMs using powershell script by calling the github .json scripts", 
  image : "assets/images/courses/azurecourse/modules.svg", 
  imageAlt : ""
},
  ],
    projects:[
      { 
        name : "DevOps on Azure", 
        description : "Setting up and integrating a continuous pipeline with DevOps tools on Azure to achieve continuous integration, continuous deployment, continuous testing and continuous feedback.", 
        image : "assets/images/courses/azurecourse/devops-with-azure-project-digital-lync.jpg", 
        imageAlt : "azurecourse", 
    },
    {
      name: "Big Data on Azure",
      description:"Visualize the data flow by connecting all data technologies on Azure. Big data on Azure allows you to skip the hardware and maintenance purchases and move straight to the projects at hand.",
      image: "assets/images/courses/azurecourse/big-data-with-azure-project-digital-lync.png",
      imageAlt:"Azure",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="azure-course-training-hyderabad";
    this.page.slug="azure-course-training-hyderabad";
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


