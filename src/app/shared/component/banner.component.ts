import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    SimpleChange
} from "@angular/core";
import { Props } from "../../apex/common/props";

@Component({
    selector: 'app-banner',
    template: `
    <ng-template ngFor let-item [ngForOf]="bannerData" let-i="index">
    <section class="coursebanner"  [style.backgroundImage]="'url('+item.img+')'">
    <div class="container Aligner">
        <div class="row Aligner-item">
            <div class="col-md-7">
                <h3 class="" style="color:white">{{item.heading}}</h3>
            </div>
            <div class="col-md-5"></div>
        </div>
    </div>
</section>
</ng-template>
    `,
    styles: [`
    .coursebanner {
        margin-top: 0px;
        display: flex;
        height: 61vh;
        /* background-image: url('../images/home-banner.jpg'); */
        background-size: cover;
        width: 100%
    }
    /* ipad media queries */
    @media only screen and (min-width: 768px) and (max-width: 1024px){
        .course-page-enroll-form{
          width: 220px !important;
        }
        .coursebanner{
            height:31vh;
        }
        .card-body h4{
            font-size:12px;
        }
      }
      @media only screen and (min-width: 320px) and (max-width: 500px){
        .course-page-enroll-form{
          width: 220px !important;
        }
        .coursebanner{
            height:21vh;
        }
        .coursebanner .heading, .bannerContainer>h1{
           font-size: 16px !important;
        }
        .coursebanner  .bannerContainer{
           padding: 0px !important;
         }
        .card-body h4{
            font-size:12px;
        }
      }
    
    .coursebanner .heading {
        font-size: 43px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 2px;
        text-align: center;
        color: white;
        /* //margin-top: 150px; */
        
    }
    .coursebanner .bannerContainer{
        padding: 100px 0px;
    }
    .coursebanner .bannerContainer h1{
        font-size: 43px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 2px;
        text-align: center;
        color: white;
        /* //margin-top: 150px; */   
    }
    
    .coursebanner .caption {
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        text-align: left;
        color: #939393;
        margin-left: 60px;
        margin-bottom: 80px;
    }
    `
    ]
})
export class BannerComponent {
    @Output() outputEvent: EventEmitter<any> = new EventEmitter<any>();

    @Input() inputData: any;
    bannerData: any;

    constructor() { }
    ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (changes.hasOwnProperty("inputData")) {
            this.bannerData = JSON.parse(JSON.stringify(this.inputData));
            if (this.bannerData) {
                this.doService(this.bannerData);
            }
        }
    }
    doService(bannerData: any[]) {
        this.bannerData = bannerData;
    }
}