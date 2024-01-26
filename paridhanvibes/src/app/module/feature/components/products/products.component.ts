import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { menJeans } from 'src/Data/menJeans';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filterData: any
  singleFilterData:any
  products:any

  constructor(
    private router:Router,
    private activeRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.filterData = filters
    this.singleFilterData=singleFilter
    this.products=menJeans
  }

  handleMultiSelectFilter(value:string, sectionId:string){
    const queryParams={...this.activeRoute.snapshot.queryParams};
    console.log(queryParams);
    
    const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];
    const valueIndex = filterValues.indexOf(value);
    
    if(valueIndex!=-1){
      filterValues.splice(valueIndex,1)
    }else{
      filterValues.push(value);
    }
    if(filterValues.length>0){
      queryParams[sectionId]=filterValues.join(",");
    }else{
      delete queryParams[sectionId];
    }
    this.router.navigate([],{queryParams})
  }

  handleSingleSelectFilter(value:string,sectionId:string){
    const queryParams={...this.activeRoute.snapshot.queryParams};
    console.log(queryParams);

    queryParams[sectionId]=value;

    this.router.navigate([],{queryParams})
  }

  

}
