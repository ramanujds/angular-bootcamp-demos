import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ShortenPipe } from './shorten.pipe';
import { ShowBookComponent } from './show-book/show-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BookReactiveComponent } from './book-reactive/book-reactive.component';
import { CovidClientComponent } from './covid-client/covid-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AddBookComponent,
    ShortenPipe,
    ShowBookComponent,
    UpdateBookComponent,
    ErrorPageComponent,
    BookReactiveComponent,
    CovidClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
