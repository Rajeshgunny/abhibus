import { Component ,OnInit } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private BaseUrl = 'http://localhost/db/dbconn.php';
  constructor(private http: Http) { }
  user: User = {
    username: "",
    password: ""
  };
  ngOnInit() {
  }
  isavailable = false;
  onSubmit = function (user) { 
    var body = "username=" + user.username + "&password=" + user.password;  
    this.http.post(this.BaseUrl, body,{
      headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})).
       subscribe((data) => {
        let resJSON = JSON.parse(data._body);
        if(resJSON['token']==""){
          alert("Invalid User");
        }else{
        localStorage.setItem('token', resJSON['token']);
        //console.log(localStorage.getItem('token'));
        this.token=localStorage.getItem('token');
        this.isavailable = true;
        //console.log(resJSON['token']);
        }
      })   
   }

}


