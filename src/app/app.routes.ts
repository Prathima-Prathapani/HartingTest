import { Routes } from '@angular/router';
//import { HouseListComponent } from './components/house-list1/house-list.component';
import { HouseListComponent } from './features/house-list/house-list.component';
import { HouseDetailComponent } from './features/house-detail/house-detail.component';


export const routes: Routes = [
  { path: '', component: HouseListComponent},
  {path:'houselist',component: HouseListComponent},
  { path: 'house/:id', component: HouseDetailComponent },
  { path: '**', redirectTo: 'houselist' }
];