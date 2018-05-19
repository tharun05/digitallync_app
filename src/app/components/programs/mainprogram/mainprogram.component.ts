import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { Props } from '../../../apex/common/props';
import { Contact } from '../../../apex/entities/contact.entity';

declare var $: any;
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';

import { ContactForm } from '../../../shared/common-form/app.form';
@Component({
  selector: 'app-mainprogram',
  templateUrl: './mainprogram.component.html',
  styleUrls: ['./mainprogram.component.scss']
})
export class MainprogramComponent implements OnInit {
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('footerBotom') footerBottom: ElementRef;
  imageHost=Props.IMAGE_HOST;
  UserDetailsForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  namePattern = '[a-zA-Z ]+$';
  mobilePattern = '^[6-9][0-9]{9}$';
  myForm: any = ContactForm.init();
  profile: Contact = new Contact();
  bannerData:any= [
    {
      heading:'We are Online!Courses Too, So, Step into online platform for Bright Career!',
      img:'../../../../assets/images/coursebanner.png'
  }
  ];/*  */
programData=[
  {
    name:"Fullstack Program",
    share:"44",
    views:"455",
    programImage:"fullstack_programs.png",
    programImageAlt:"Fullstack Program",
    slug:"fullstack-program",
    piosition:"1"
  },
  {
    name:"Fullstack with Java",
    share:"44",
    views:"455",
    programImage:"fullstack-with-java-digital-lync.png",
    programImageAlt:"Fullstack with JAVA Program",
    slug:"fullstack-java",
    piosition:"2"
  },
  {
    name:"Fullstack with Python",
    share:"44",
    views:"455",
    programImage:"pystack_programs.png",
    programImageAlt:"pystack programs",
    slug:"fullstack-python-program",
    piosition:"3"
  },
  {
    name:"Python Engineer Program",
    share:"44",
    views:"455",
    programImage:"python_programs.png",
    programImageAlt:"python programs",
    slug:"python-engineer-program",
    piosition:"3"
  },
  {
    name:"AI Foundation with Python",
    share:"44",
    views:"455",
    programImage:"ai-foundation.png",
    programImageAlt:"AI foundation with Python",
    slug:"AI-python",
    piosition:"3"
  },
  {
    name:"Machine Learning Foundation",
    share:"44",
    views:"455",
    programImage:"Machine-Learning-digital-lync.png",
    programImageAlt:"Machine Learning Foundation program",
    slug:"machine-learning-program",
    piosition:"3"
  },
  {
    name:"Blockchain with Python",
    share:"44",
    views:"455",
    programImage:"blockchain-with-python-digital-lync.png",
    programImageAlt:"Blockchain with Python",
    slug:"blockchain-python",
    piosition:"3"
  }, 
  {
    name:"Blockchain with Javascript",
    share:"44",
    views:"455",
    programImage:"blockchain-with-javascript-digital-lync.png",
    programImageAlt:"Blockchain with Javascript",
    slug:"blockchain-javascript",
    piosition:"3"
  },  
  {
    name:"Blockchain Foundation",
    share:"44",
    views:"455",
    programImage:"blockchain-foundation-digital-lync.png",
    programImageAlt:"Blockchain Foundation",
    slug:"blockchain-foundation",
    piosition:"3"
  },  
  {
    name:"Cloud DevOps Engineer",
    share:"44",
    views:"455",
    programImage:"devops_programs.png",
    programImageAlt:"Cloud DevOps Engineer",
    slug:"cloud-devops-engineer",
    piosition:"3"
  },  
  {
    name:"Digital Marketing Executive",
    share:"44",
    views:"455",
    programImage:"digitalmarketing_programs.png",
    programImageAlt:"Digital Marketing Executive",
    slug:"digital-marketing-program",
    piosition:"3"
  },  
  {
    name:"Foundation skills in IT",
    share:"44",
    views:"455",
    programImage:"fsit1-digital-lync.jpg",
    programImageAlt:"Foundation Skills in IT",
    slug:"FSIT-Program",
    piosition:"3"
  },  
  {
    name:"Gaming,AR-VR",
    share:"44",
    views:"455",
    programImage:"gaming-program-digital-lync.png",
    programImageAlt:"Gaming , AR and VR",
    slug:"Gaming,AR-VR",
    piosition:"3"
  },  
  {
    name:"CRT Program",
    share:"44",
    views:"455",
    programImage:"crt-program-digital-lync.png",
    programImageAlt:"CRT Program",
    slug:"CRT",
    piosition:"3"
  }, 
  {
    name:"Get Ready for Hackathon",
    share:"44",
    views:"455",
    programImage:"get-hackthon-digital-lync.png",
    programImageAlt:"Get Ready for Hackathon",
    slug:"Hackathon",
    piosition:"3"
  },  
]
  constructor(private router: Router,private formBuilder: FormBuilder) { 
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern(this.namePattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
       'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
  }
  onsubmit(){
    
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $(this.nav.nativeElement).affix({
      offset: {
        top: $(this.nav.nativeElement).offset().top,
        bottom: ($('#footer-bottom').outerHeight(true) + 450
        )
      }
    })
  }

}
