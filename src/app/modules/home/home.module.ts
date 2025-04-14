import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
 
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

 

 

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    FormsModule

  ],
  exports: [
     
  ]
})
export class HomeModule { }

