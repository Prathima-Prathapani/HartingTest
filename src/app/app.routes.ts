import { Routes } from '@angular/router';
//import { HouseListComponent } from './components/house-list1/house-list.component';
import { HouseListComponent } from './features/house-list/house-list.component';


export const routes: Routes = [
  { path: '', component: HouseListComponent},
  {path:'houselist',component: HouseListComponent},
  { path: '**', redirectTo: 'houselist' }
];