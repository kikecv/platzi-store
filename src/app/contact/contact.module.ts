import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
      ContactComponent

  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  exports:[
    ContactComponent
]
})
export class ContactModule { }