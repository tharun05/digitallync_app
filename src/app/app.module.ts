import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import {CommonModule} from '@angular/common'; 
import {WINDOW_PROVIDERS} from "./services/window.service";
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { BgvideoComponent } from './components/landing/bgvideo/bgvideo.component';
import { TrendingcoursesComponent } from './components/landing/trendingcourses/trendingcourses.component';
import { WeareoneComponent } from './components/landing/weareone/weareone.component';
import { OurprocessComponent } from './components/landing/ourprocess/ourprocess.component';
import { OurbranchesComponent } from './components/landing/ourbranches/ourbranches.component';
import { OurreviewsComponent } from './components/landing/ourreviews/ourreviews.component';
import { OurpartnersComponent } from './components/landing/ourpartners/ourpartners.component';
import {SharedModule} from './shared/shared.module';
import {FooterService} from './components/footer/footer.service';
import { DevopscourseComponent } from './components/courses/devopscourse/devopscourse.component';
import { AzurecourseComponent } from './components/courses/azurecourse/azurecourse.component';
import { PythoncourseComponent } from './components/courses/pythoncourse/pythoncourse.component';
import { DeeplearningcourseComponent } from './components/courses/deeplearningcourse/deeplearningcourse.component';
import { BigdatacourseComponent } from './components/courses/bigdatacourse/bigdatacourse.component';
import { DataanalysiscourseComponent } from './components/courses/dataanalysiscourse/dataanalysiscourse.component';
import { DigitalmarketingcourseComponent } from './components/courses/digitalmarketingcourse/digitalmarketingcourse.component';
import { AnimationcourseComponent } from './components/courses/animationcourse/animationcourse.component';
import { VfxcourseComponent } from './components/courses/vfxcourse/vfxcourse.component';
import { IotcourseComponent } from './components/courses/iotcourse/iotcourse.component';
import { AwscourseComponent } from './components/courses/awscourse/awscourse.component';
import { FullstackcourseComponent } from './components/courses/fullstackcourse/fullstackcourse.component';
import { DatasciencecourseComponent } from './components/courses/datasciencecourse/datasciencecourse.component';
import { MachinelearningcourseComponent } from './components/courses/machinelearningcourse/machinelearningcourse.component';
import { ArtificialintelligencecourseComponent } from './components/courses/artificialintelligencecourse/artificialintelligencecourse.component';
import { BlockchaincourseComponent } from './components/courses/blockchaincourse/blockchaincourse.component';
import { GamedevelopmentcourseComponent } from './components/courses/gamedevelopmentcourse/gamedevelopmentcourse.component';
import { GraphicdesigncourseComponent } from './components/courses/graphicdesigncourse/graphicdesigncourse.component';
import { UiuxcourseComponent } from './components/courses/uiuxcourse/uiuxcourse.component';
import { FullstackprogramComponent } from './components/programs/fullstackprogram/fullstackprogram.component';
import { FullstackwithjavaComponent } from './components/programs/fullstackwithjava/fullstackwithjava.component';
import { FullstackwithpythonComponent } from './components/programs/fullstackwithpython/fullstackwithpython.component';
import { PythonengineerprogramComponent } from './components/programs/pythonengineerprogram/pythonengineerprogram.component';
import { AiwithpythonComponent } from './components/programs/aiwithpython/aiwithpython.component';
import { MachinelearningprogramComponent } from './components/programs/machinelearningprogram/machinelearningprogram.component';
import { BlockchainwithpythonComponent } from './components/programs/blockchainwithpython/blockchainwithpython.component';
import { BlockchainwithjavascriptComponent } from './components/programs/blockchainwithjavascript/blockchainwithjavascript.component';
import { BlockchainfoundationComponent } from './components/programs/blockchainfoundation/blockchainfoundation.component';
import { ClouddevopsengineerComponent } from './components/programs/clouddevopsengineer/clouddevopsengineer.component';
import { DigitalmarketingexecutiveComponent } from './components/programs/digitalmarketingexecutive/digitalmarketingexecutive.component';
import { FsitprogramComponent } from './components/programs/fsitprogram/fsitprogram.component';
import { GamingarvrprogramComponent } from './components/programs/gamingarvrprogram/gamingarvrprogram.component';
import { CrtprogramComponent } from './components/programs/crtprogram/crtprogram.component';
import { GethackathonprogramComponent } from './components/programs/gethackathonprogram/gethackathonprogram.component';
import { MaincourseComponent } from './components/courses/maincourse/maincourse.component';
import { MainprogramComponent } from './components/programs/mainprogram/mainprogram.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'digital-lync' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    BgvideoComponent,
    TrendingcoursesComponent,
    WeareoneComponent,
    OurprocessComponent,
    OurbranchesComponent,
    OurreviewsComponent,
    OurpartnersComponent,
    DevopscourseComponent,
    AzurecourseComponent,
    PythoncourseComponent,
    DeeplearningcourseComponent,
    BigdatacourseComponent,
    DataanalysiscourseComponent,
    DigitalmarketingcourseComponent,
    AnimationcourseComponent,
    VfxcourseComponent,
    IotcourseComponent,
    AwscourseComponent,
    FullstackcourseComponent,
    DatasciencecourseComponent,
    MachinelearningcourseComponent,
    ArtificialintelligencecourseComponent,
    BlockchaincourseComponent,
    GamedevelopmentcourseComponent,
    GraphicdesigncourseComponent,
    UiuxcourseComponent,
    FullstackprogramComponent,
    FullstackwithjavaComponent,
    FullstackwithpythonComponent,
    PythonengineerprogramComponent,
    AiwithpythonComponent,
    MachinelearningprogramComponent,
    BlockchainwithpythonComponent,
    BlockchainwithjavascriptComponent,
    BlockchainfoundationComponent,
    ClouddevopsengineerComponent,
    DigitalmarketingexecutiveComponent,
    FsitprogramComponent,
    GamingarvrprogramComponent,
    CrtprogramComponent,
    GethackathonprogramComponent,
    MaincourseComponent,
    MainprogramComponent,
    ReviewsComponent,

  ],
  providers: [FooterService,WINDOW_PROVIDERS],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
