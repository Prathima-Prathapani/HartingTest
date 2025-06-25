
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService, House } from '../../services/house.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';


@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.scss'
})
export class HouseDetailComponent implements OnInit {
  house: any;
  sub: any;
  id: any;
  titles: any;
  seats : any;

  constructor(
    private route: ActivatedRoute,
    private houses: HouseService,
    private location: Location,
    private router: Router
  ) {
     this.router.routeReuseStrategy.shouldReuseRoute = () => {
    return false;
  };
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
        });
   

      this.houses.getHouseById(this.id).subscribe({
      next: (data) => {
        this.house = data
        this.arrayFlatten()
      },
      error: (err) => {
        console.error('Failed to fetch house Data', err);
       
      }
    });

  }
  arrayFlatten()
  {
    this.titles = this.house.titles?.filter((title: any) => title)?.join(', ') || 'None';
    this.seats = this.house.seats?.filter((title: any) => title)?.join(', ') || 'None';
  }


  
  loadHouse(url: string): void {

    let id = url.split('/').at(-1);
    this.router.navigate(['house', id],{ state: { id: id} });
  }
}
