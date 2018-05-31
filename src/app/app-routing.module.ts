import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';
import {DevopscourseComponent} from "./components/courses/devopscourse/devopscourse.component";
import {AzurecourseComponent} from "./components/courses/azurecourse/azurecourse.component";
import {PythoncourseComponent} from "./components/courses/pythoncourse/pythoncourse.component";
import {DeeplearningcourseComponent} from "./components/courses/deeplearningcourse/deeplearningcourse.component";
import {BigdatacourseComponent} from "./components/courses/bigdatacourse/bigdatacourse.component";
import {DataanalysiscourseComponent} from "./components/courses/dataanalysiscourse/dataanalysiscourse.component";
import {DigitalmarketingcourseComponent} from "./components/courses/digitalmarketingcourse/digitalmarketingcourse.component";
import {AnimationcourseComponent} from "./components/courses/animationcourse/animationcourse.component";
import {VfxcourseComponent} from "./components/courses/vfxcourse/vfxcourse.component";
import {IotcourseComponent} from "./components/courses/iotcourse/iotcourse.component";

import {AwscourseComponent} from "./components/courses/awscourse/awscourse.component";
import {FullstackcourseComponent} from "./components/courses/fullstackcourse/fullstackcourse.component";
import {DatasciencecourseComponent} from "./components/courses/datasciencecourse/datasciencecourse.component";
import {MachinelearningcourseComponent} from "./components/courses/machinelearningcourse/machinelearningcourse.component";
import {ArtificialintelligencecourseComponent} from "./components/courses/artificialintelligencecourse/artificialintelligencecourse.component";
import {BlockchaincourseComponent} from "./components/courses/blockchaincourse/blockchaincourse.component";
import {GamedevelopmentcourseComponent} from "./components/courses/gamedevelopmentcourse/gamedevelopmentcourse.component";
import {GraphicdesigncourseComponent} from "./components/courses/graphicdesigncourse/graphicdesigncourse.component";
import {UiuxcourseComponent} from "./components/courses/uiuxcourse/uiuxcourse.component";
import {FullstackprogramComponent} from './components/programs/fullstackprogram/fullstackprogram.component'
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
import {MainprogramComponent} from './components/programs/mainprogram/mainprogram.component';
import {ThankyoupageComponent} from './components/thankyoupage/thankyoupage.component';
export const routes: Routes = [
  { path: '', component: LandingComponent },
  {path:'courses',component:MaincourseComponent,children:[
    {path:'**',component:MaincourseComponent}
  ]},
  {path:'programs',component:MainprogramComponent,children:[
    {path:'**',component:MainprogramComponent}
  ]},
  { path: 'thankyou', component: ThankyoupageComponent},
  { path: 'course/devops-course-training-hyderabad', component: DevopscourseComponent},
  { path: 'course/azure-course-training-hyderabad', component: AzurecourseComponent },
  { path: 'course/python-course-training-hyderabad', component: PythoncourseComponent },
  { path: 'course/deep-learning-course-training-hyderabad', component: DeeplearningcourseComponent },
  { path: 'course/big-data-course-training-hyderabad', component: BigdatacourseComponent },
  { path: 'course/data-analysis-course-training-hyderabad', component: DataanalysiscourseComponent },
  { path: 'course/digital-marketing-course-training-hyderabad', component: DigitalmarketingcourseComponent },
  { path: 'course/3D-animation-course-training-hyderabad', component: AnimationcourseComponent },
  { path: 'course/vfx-course-training-hyderabad', component: VfxcourseComponent },
  { path: 'course/iot-course-training-hyderabad', component: IotcourseComponent },
  { path: 'course/aws-course-training-hyderabad', component: AwscourseComponent },
  { path: 'course/fullstack-course-training-hyderabad', component: FullstackcourseComponent },
  { path: 'course/data-science-course-training-hyderabad', component: DatasciencecourseComponent },
  { path: 'course/machine-learning-course-training-hyderabad', component: MachinelearningcourseComponent },
  { path: 'course/artificial-intelligence-course-training-hyderabad', component: ArtificialintelligencecourseComponent },
  { path: 'course/blockchain-course-training-hyderabad', component: BlockchaincourseComponent },
  { path: 'course/game-development-course-training-hyderabad', component: GamedevelopmentcourseComponent },
  { path: 'course/graphic-design-course-training-hyderabad', component: GraphicdesigncourseComponent },
  { path: 'course/ui-ux-course-training-hyderabad', component: UiuxcourseComponent },
  
  {path:'program/fullstack-program',component:FullstackprogramComponent},
  {path:'program/fullstack-java',component:FullstackwithjavaComponent},
  {path:'program/fullstack-python-program',component:FullstackwithpythonComponent},
  {path:'program/python-engineer-program',component:PythonengineerprogramComponent},
  {path:'program/AI-python',component:AiwithpythonComponent},
  {path:'program/machine-learning-program',component:MachinelearningprogramComponent},
  {path:'program/blockchain-python',component:BlockchainwithpythonComponent},
  {path:'program/blockchain-javascript',component:BlockchainwithjavascriptComponent},
  {path:'program/blockchain-foundation',component:BlockchainfoundationComponent},
  {path:'program/cloud-devops-engineer',component:ClouddevopsengineerComponent},
  {path:'program/digital-marketing-program',component:DigitalmarketingexecutiveComponent},
  {path:'program/FSIT-Program',component:FsitprogramComponent},
  {path:'program/Gaming,AR-VR',component:GamingarvrprogramComponent},
  {path:'program/CRT',component:CrtprogramComponent},
  {path:'program/Hackathon',component:GethackathonprogramComponent}
  
  // { path: 'fullstack', component: FullstackComponent },
  // { path: 'blockchain', component: BlockchainComponent },
  // { path: 'digitalmarketing', component: DigitalmarketingComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
