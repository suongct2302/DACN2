import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { KindRoomComponent } from './kind-room/kind-room.component';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { ConferenceComponent } from './conference/conference.component';
import { SpaComponent } from './spa/spa.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { DestinationComponent } from './destination/destination.component';
import { OffersComponent } from './offers/offers.component';





@NgModule({
  declarations: [ KindRoomComponent, DetailsRoomComponent, BookRoomComponent, CuisineComponent, ConferenceComponent, SpaComponent, EntertainmentComponent, DestinationComponent, OffersComponent, ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
