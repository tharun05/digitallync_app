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
  selector: 'app-devopscourse',
  templateUrl: './devopscourse.component.html',
  styleUrls: ['./devopscourse.component.scss']
})
export class DevopscourseComponent implements OnInit {
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
  courseName: any='DevOps';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 DevOps Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking DevOps Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'DevOps Training in Hyderabad | DevOps Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'DevOps training in hyderabad, DevOps course in hyderabad, DevOps certification in Hyderabad, DevOps training institute in Hyderabad, digital lync'});
  
    title.setTitle('DevOps Training in Hyderabad | DevOps Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="devops-course-training-hyderabad";
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
    ],
    subModules:[
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
    },
    { 
      name : "Git", 
      description : "Fast and Flexible distributed Version Control Tool. Allows to experiment new feature without interfering with working code.", 
      image : "git-digital-lync.svg", 
      imageAlt : "Git"
  },
  { 
    name : "Lamp",  
    description : "Linux-Apache-MySQL-PHP technology is open source and highly secure, while running on a LINUX operating system.", 
    image : "lamp-digital-lync.svg", 
    imageAlt : "Lamp"
},{  
  name : "Chef", 
  description : "Strong choice for experienced DevOps Teams to automate development and deployment infrastructure.", 
  image : "chef-digital-lync.svg", 
  imageAlt : "Chef"
},{ 
  name : "Docker", 
  description : "Docker is a computer program that performs operating-system-level virtualization also known as containerization.", 
  image : "docker-digital-lync.svg", 
  imageAlt : "Docker"
},{ 
  name : "Maven", 
  description : "MAVEN has the ability to create project structure. Maven can generate documentation for the project.", 
  image : "maven-digital-lync.svg", 
  imageAlt : "Maven"
},
{ 
  name : "Vagrant", 
  description : "Allows building and managing virtual machine environments. ", 
  image : "vagrant-digital-lync.svg", 
  imageAlt : "Vagrant"
},
{ 
  name : "Nagios", 
  description : "Nagios is recognized as the top solution to monitor servers. It is fully capable of monitoring Windows servers, Linux servers.", 
  image : "nagios-digital-lync.svg", 
  imageAlt : "Nagios"
}
    
    ],
    projects:[
      { 
        name : "Use Maven to develop web applications and put the application under version control system using Git.", 
        description : "Use GitHub and push the project to GitHub,for collaboration. Build a GCP instance and install jenkins CI-CD server and configure the jenkins using RBAC, configure security, manage required plugins. Configure jenkins and setup GitHub webhook for auto deploying the WebApp.", 
        image : "project-digital-lync.png", 
        imageAlt : "DevOps", 
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="devops-course-training-hyderabad";
    this.page.slug="devops-course-training-hyderabad";
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
