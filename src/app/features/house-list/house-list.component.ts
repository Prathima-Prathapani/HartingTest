import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HouseService, House } from '../../services/house.service';
import { merge, startWith, switchMap, map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-house-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  displayedColumns = ['name', 'region','titles','words','House Details'];
  data: House[] = [];
  
  isLoading = true;

  

  constructor(private houses: HouseService, private router: Router) {}

  ngOnInit() {
    
      this.houses.getHouseData().subscribe({
      next: (data) => {
     
        this.data = data;
       
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch houses:', err);
        this.isLoading = false;
      }
    });
  }

  onRowClick(house: House) {
    
    let id = HouseService.idFromUrl(house.url);
    this.router.navigate(['house', id],{ state: { id: id} });
  }
}
