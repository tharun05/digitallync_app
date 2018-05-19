import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { Props } from '../../../apex/common/props';
import { Contact } from '../../../apex/entities/contact.entity';

declare var $: any;
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';

import { ContactForm } from '../../../shared/common-form/app.form';
@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.scss']
})
export class MaincourseComponent implements OnInit {
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('footerBotom') footerBottom: ElementRef;
  bannerData:any= [
    {
      heading:'We are Online!Courses Too, So, Step into online platform for Bright Career!',
      img:'../../../../assets/images/coursebanner.png'
  }
  ];
  imageHost=Props.IMAGE_HOST;
  UserDetailsForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  namePattern = '[a-zA-Z ]+$';
  mobilePattern = '^[6-9][0-9]{9}$';
  myForm: any = ContactForm.init();
  profile: Contact = new Contact();
  courseData=[

    { 
      name : "DevOps", 
      courseImage : "devops-digital-lync.png", 
      courseImageAlt: "Devops", 
      views : 5190, 
      share: 567, 
      rating : 4.6, 
      slug: "devops-course-training-hyderabad", 
      position : 1, 
  },
  { 
    name : "FullStack", 
    careerHead: "", 
    courseImage : "fullstack-digital-lync.png", 
    courseImageAlt : "Fullstack", 
    views :3788, 
    share : 567, 
    rating : 4.5, 
    slug : "fullstack-course-training-hyderabad", 
    position : 4,
},
{ 
  name : "Data Science", 
  courseImage : "data-science-digital-lync.png", 
  courseImageAlt : "Data Science", 
  views :1960, 
  share : 567, 
  rating : 4.6, 
  slug : "data-science-course-training-hyderabad", 
  position : 6, 

},
{ 
  name : "Data Analysis", 
  courseImage : "data-analysis-digital-lync.png", 
  courseImageAlt : "Data Analysis", 
  views : 1478, 
  share : 567, 
  rating : 4.5, 
  slug : "data-analysis-course-training-hyderabad", 
  position :11, 
},
{ 
  name : "Python", 
  courseImage : "python-course-digital-lync.png", 
  courseImageAlt : "Python", 
  views : 3265, 
  share : 567, 
  rating : 4.7, 
  slug : "python-course-training-hyderabad", 
  position : 5, 
},{ 
  name:"Deep Learning", 
  courseImage : "deep-learning-course-digital-lync.png", 
  courseImageAlt : "Deep Learning", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "deep-learning-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Machine Learning", 
  courseImage : "machine-learning-course-digital-lync.png", 
  courseImageAlt : "Machine Learning", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "machine-learning-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Big Data", 
  courseImage : "big-data-digital-lync.png", 
  courseImageAlt : "Big Data", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "big-data-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Artificial Intelligence", 
  courseImage : "artificial-intelligence-course-digital-lync.png", 
  courseImageAlt : "Artificial Intelligence", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "artificial-intelligence-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Data Analysis", 
  courseImage : "data-analysis-digital-lync.png", 
  courseImageAlt : "Data Analysis", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "data-analysis-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Blockchain", 
  courseImage : "blockchain-digital-lync.png", 
  courseImageAlt : "Blockchain", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "blockchain-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Digital Marketing", 
  courseImage : "digital-marketing-digital-lync.png", 
  courseImageAlt : "Digital Marketing", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "digital-marketing-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Game Development", 
  courseImage : "game-development-digital-lync.png", 
  courseImageAlt : "Game Development", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "game-development-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"3D Animation", 
  courseImage : "3d-animation-digital-lync.png", 
  courseImageAlt : "Digital Marketing", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "3D-animation-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"Graphic Design", 
  courseImage : "graphic-design-digital-lync.png", 
  courseImageAlt : "Graphic Design", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "graphic-design-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"VFX", 
  courseImage : "vfx-digital-lync.png", 
  courseImageAlt : "vfx", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "vfx-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"UI/UX", 
  courseImage : "ui-ux-digital-lync.png", 
  courseImageAlt : "ui/ux", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "ui-ux-course-training-hyderabad", 
  position : 7, 
},
{ 
  name:"IoT", 
  courseImage : "iot-digital-lync.jpg", 
  courseImageAlt : "iot", 
  views : 1425, 
  share : 67, 
  rating : 4.7, 
  slug : "iot-course-training-hyderabad", 
  position : 7, 
},

  ]
  constructor(private router: Router,private formBuilder: FormBuilder,) { 
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern(this.namePattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
       'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
  }
  onSubmit(){
    
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
