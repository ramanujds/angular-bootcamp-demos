import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BookReactiveComponent } from './book-reactive/book-reactive.component';
import { CovidClientComponent } from './covid-client/covid-client.component';


const routes: Routes = [
  {
    path:'add-book', component:AddBookComponent
  },
  {
    path:'show-all', component:ShowBookComponent
  },
  {
    path:'update-book/:id', component:UpdateBookComponent
  },
  {
    path:'error', component:ErrorPageComponent
  },
  {
    path:'book-reactive', component:BookReactiveComponent
  },
  {
    path:'covid-info',component:CovidClientComponent
  },
  {
    path:'**',redirectTo:'/error'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
