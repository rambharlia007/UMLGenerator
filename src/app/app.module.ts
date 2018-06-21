import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Select2Module} from 'ng2-select2';
import { AppComponent } from './app.component';
import {ApiDesignerComponent} from './apidesigner/api-designer/api-designer.component';
import {EntityAccordionComponent} from './apidesigner/entity-accordion/entity-accordion.component';
import {EntityFieldComponent} from './apidesigner/entity-field/entity-field.component';
import {EntityNavigationComponent} from './apidesigner/entity-navigation/entity-navigation.component';

import {CommonService} from './service/common.service';
import {EntityService} from './service/entity.service';




@NgModule({
  declarations: [
    AppComponent,
    ApiDesignerComponent,
    EntityAccordionComponent,
    EntityFieldComponent,
    EntityNavigationComponent
  ],
  imports: [
    BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        Select2Module
  ],
  providers: [CommonService,EntityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
