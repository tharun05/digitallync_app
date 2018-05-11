import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApexService } from './service/apex.service';
import {FormMessagesComponent} from './component/form.messages.component';

import {CardAComponent} from './cards/card-a.component';
import {CardBComponent} from './cards/card-b.component';
import { CCPaymentComponent } from './component/app.payment.component';

import {BannerComponent} from './component/banner.component';

@NgModule({
    imports: [
        CommonModule,FormsModule, ReactiveFormsModule
    ],
    declarations: [
    CardAComponent,CardBComponent, CCPaymentComponent,FormMessagesComponent,BannerComponent
    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule,  
     CardAComponent,CardBComponent, CCPaymentComponent,BannerComponent

    ],
    providers: []

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApexService
            ],
        };
    }
}