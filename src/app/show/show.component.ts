import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  trainee:string='';
  constructor() { }
  flag=false;
  ngOnInit(): void {
  }

  fun(trainee){
    this.trainee=trainee;
    console.log(trainee);
  }

}
