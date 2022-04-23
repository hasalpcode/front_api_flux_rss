import { Component, OnInit } from '@angular/core';
import { Rss } from 'src/app/rss';
import { DataService } from 'src/app/service/data.service'
@Component({
  selector: 'app-flux',
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.css']
})
export class FluxComponent implements OnInit {
  public flux:any;
Flux = new Rss;
  constructor(private  dataService:DataService) { }

  ngOnInit(): void {
    this.getFlux();
  }
  getFlux(){
      console.log('liste des flux');
      this.dataService.getData().subscribe(res =>{
        console.log(res);
        this.flux = res;
      })
    }
    handleUp(){
      console.log(this.Flux);
    }
}
