import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  authRequest:any = {
    "userName":"admin",
    "password":"password"
  };
  response:any;
  constructor(private service:JwtClientService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest:any){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data => this.accessApi(data));
  }

  public accessApi(token:any){
    let resp=this.service.welcome(token);
    resp.subscribe(data => this.response=data)
  }
}
