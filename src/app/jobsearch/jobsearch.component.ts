import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {

  constructor(private httpObj:HttpClient) { }

  ngOnInit() {
    this.getDesignation();
    this.getcity();
    this.getjoblist();
  }

  item1:any[];
  total1:number;
  p1:number=1;// default page
  getDesignation()
  {
    this.httpObj.get("https://www.firstenquiry.com/api/getkeyword").subscribe(
      response => {
        this.item1=response as string[];
        this.total1=this.item1.length;
      }
    );
  }

 citylist:any[]=[];
 getcity()
  {
    this.httpObj.get("https://www.firstenquiry.com/api/getcity").subscribe(
      response => {
        this.citylist = response as string[];
      }
    );
  }


joblist:any[]=[];
getjoblist()
  {
    this.httpObj.get("https://www.firstenquiry.com/api/getjob").subscribe(
      response => {
        this.joblist = response as string[];
      }
    );
  }

  searchJob(rolename:string,cityname:string){
    var searchkey = rolename +"-"+ cityname;
    var jsondata= {"loc":searchkey}
    var url ="https://www.firstenquiry.com/api/search";
    this.httpObj.post(url,jsondata).subscribe(
      response => {
        this.joblist = response as string[];
      }
    );
  }

  searchByRole(rolename:string){
    var searchkey = rolename;
    var jsondata= {"loc":searchkey}
    var url ="https://www.firstenquiry.com/api/search";
    this.httpObj.post(url,jsondata).subscribe(
      response => {
        this.joblist = response as string[];
      }
    );
  }
}