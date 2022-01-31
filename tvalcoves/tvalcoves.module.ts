import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvalcovesRoutingModule } from './tvalcoves-routing.module';
import { TvalcovesComponent } from './tvalcoves.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    TvalcovesComponent
  ],
  imports: [
    CommonModule,
    TvalcovesRoutingModule,
    HeaderModule,
    FooterModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TvalcovesModule { }
