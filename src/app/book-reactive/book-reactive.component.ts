import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { forbiddenTitleValidator } from './title-validator';

@Component({
  selector: 'app-book-reactive',
  templateUrl: './book-reactive.component.html',
  styleUrls: ['./book-reactive.component.css']
})
export class BookReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  // bookForm=new FormGroup(
  //   {
  //    id:new FormControl('110'),
  //    title: new FormControl(),
  //    author:new FormControl(),
  //    price:new FormControl('600')
  //   }
  // )

  bookForm=this.formBuilder.group(
    {
      id:['',[Validators.required,Validators.min(100)]],
      title:['',[Validators.required,forbiddenTitleValidator]],
      price:[''],
      authorForm:this.formBuilder.group({
        authorName:[''],
        authorEmail:['']
      })
    }
  )

  ngOnInit(): void {
  }

}
