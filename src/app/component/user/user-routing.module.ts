import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from '../facility-management/facility-list/facility-list.component';
import {KindRoomComponent} from './kind-room/kind-room.component';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { BookRoomComponent } from './book-room/book-room.component';
import {CuisineComponent} from './cuisine/cuisine.component';
import {ConferenceComponent} from './conference/conference.component';
import { SpaComponent } from './spa/spa.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';
import {DestinationComponent} from './destination/destination.component';
import {OffersComponent} from './offers/offers.component';


const routes: Routes = [
  {path: 'kind-room', component: KindRoomComponent},
  {path: 'details-room', component: DetailsRoomComponent},
  {path: 'book-room', component: BookRoomComponent},

  {path: 'cuisine', component: CuisineComponent},
  {path: 'conference', component: ConferenceComponent},
  {path: 'spa', component: SpaComponent},
  {path: 'entertainment', component: EntertainmentComponent},
  {path: 'destination', component: DestinationComponent},
  {path: 'offers', component: OffersComponent},
//  ví dụ thêm 1 componet thì {path: 'link', component: Têncomponet}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
