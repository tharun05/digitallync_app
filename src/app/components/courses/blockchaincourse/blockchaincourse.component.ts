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
  selector: 'app-blockchaincourse',
  templateUrl: './blockchaincourse.component.html',
  styleUrls: ['./blockchaincourse.component.scss']
})
export class BlockchaincourseComponent implements OnInit {
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
  courseName: any='Blockchain ';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: 'Indias No.1 Blockchain  Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Blockchain  Certification Course @ Digtial Lync!'});
      this.meta.updateTag(
        {name: 'Title', content: 'Blockchain  Training in Hyderabad | Blockchain  Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Blockchain  training in hyderabad, Blockchain  course in hyderabad, Blockchain  certification in Hyderabad, Blockchain  training institute in Hyderabad, digital lync'});
  
    title.setTitle('Blockchain  Training in Hyderabad | Blockchain  Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="blockchain-course-training-hyderabad";
    this.page.name="Blockchain";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Blockchain ", 
    description : "Blockchain  Course", 
    courseType : "Both", 
    duration : "9 Weeks", 
    hours : 5, 
    why : "To be a pioneer in this digital world, one has to learn the technology which is trustworthy of storing data in a digital way. Blockchain is a latest innovation in the sphere of digital technology.", 
    whyImage : "why-learn--digital-lync.png", 
    whyImageAlt : "why learn Blockchain ", 
    careerHead : "Blockchain is an immense technology to transform existing business models and invent new forms.", 
    courseImage : "Blockchain -digital-lync.png", 
    courseImageAlt : "Blockchain ", 
    views :5750, 
    share : 123,  
    slug : "blockchain-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/curriculums/Fullstack.pdf",  
    careers : [
        "Blockchain Developer",
        "Blockchain Engineer"
    ], 
    pre : [
        "Data structures NodeJS will be an added advantage."
    ],
    subModules:[
      { 
        name : "Introduction to Blockchain", 
        description : "Bitcoins and Ledgers, Mining and Miners, Transaction flow & Merkle trees", 
        image : "assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
        imageAlt : ""
    },
    { 
      name : "Types of Blockchains", 
      description : "Public Blockchains, Private Blockchains, Consortium Blockchains", 
      image : "assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
      imageAlt : ""
    },
    { 
      name : "Public Blockchain", 
      description : "Flow of blockchain information, API’s for Public Blockchains and introducing Blocktrail API", 
      image : "assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
      imageAlt : ""
  },
  { 
    name : "Private Blockchain", 
    description : "Ethereum, Ethereum Virtual Machine, Solidity, Solidity IDE, Mist Browser, Genesis.json", 
    image : "assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
    imageAlt : ""
},
{ 
  name : "Proof of Existence", 
  description : "Project on Proof of Existence, Project include Bitcore,Blocktrail", 
  image : "assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
  imageAlt : ""
},
{ 
  name : "Hyperledger and Multichain", 
  description : "Hyperledger Blockchain platforms,Hyperledger Burrow,Hyperledger Fabric", 
  image : "assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
  imageAlt : ""
},
{ 
  name : "Web 3 FrameWork", 
  description : "Importing web3.js in Node.js and client-side JavaScript,Connecting to geth", 
  image : "assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
  imageAlt : ""
},
{
  name:"Miscellaneous",
  description:"Consortium Blockchains, Hybrid Blockchains",
  image:"assets/images/courses/blockchaincourse/blockchain-module1-digital-lync.svg", 
  imageAlt : ""
}
  ],
    projects:[
      { 
        name : "Creation of Blockchain wallet", 
        description : "This application enables the creation of wallet based on Blockchain technology that can store Cryptocurrency using APIs.It enables transactions between wallets using Cryptocurrency.", 
        image : "assets/images/courses/blockchaincourse/blockchain-wallet.png", 
        imageAlt : "blockchaincourse", 
    },
    {
      name: "Voting application in Private Blockchain",
      description:"This application enables the creation of voting application based on Private Blockchain.It can track the number of votes polled for each contestant in an eletion.",
      image: "assets/images/courses/blockchaincourse/blockchain-wallet.png",
      imageAlt:"Blockchain ",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="blockchain-course-training-hyderabad";
    this.page.slug="blockchain-course-training-hyderabad";
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


