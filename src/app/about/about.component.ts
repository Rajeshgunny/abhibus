import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  private BaseUrl = 'http://localhost/html/checkconn.php';
  constructor(private http: Http) { }
  username;
  ngOnInit() {
    let body="token="+localStorage.getItem('token');
    this.http.post(this.BaseUrl, body,{
      headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})).
       subscribe((data) => {
        //console.log(JSON.parse(data._body));
       let resJSON = JSON.parse(data._body);
       //console.log(resJSON);
        this.username= resJSON.name;
        /*if(resJSON['name']==""){
          alert("Invalid User");
        }else{
        //localStorage.setItem('token', resJSON['token']);
        //console.log(localStorage.getItem('token'));
        //this.token=localStorage.getItem('token');
       // this.isavailable = true;
        //console.log(resJSON['token']);
        }*/
      })   
   }
  }
 


}
