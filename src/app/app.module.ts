import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'; 
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
//for client server communication
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

//pagination
import {NgxPaginationModule} from 'ngx-pagination';

//for search filter
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import {ReactiveFormsModule } from '@angular/forms';

//for form activity
import { FormsModule } from '@angular/forms';
const pages : Routes=[
      {path : "signup",component:SignupComponent},
      {path : "jobsearch",component:JobsearchComponent},
      {path : "",redirectTo:"/signup",pathMatch:"full"},
      {path : "**",redirectTo:"/signup",pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    JobsearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pages),
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
