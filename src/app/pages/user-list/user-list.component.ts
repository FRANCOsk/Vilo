import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/userDataModel';
import { TokenService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: UserData[];
  private numberOfUsers: number;
  private pageNumber: number;
  public columns: number;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient) {
    this.numberOfUsers = 5;
    this.pageNumber = 1;
    this.columns = 2;
  }

  ngOnInit() {
    console.log('token: ', this.tokenService.getToken());
    this.addItems();
    this.breakPoints();
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    this.numberOfUsers += 5;
    this.addItems();
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    this.numberOfUsers -= 5;
    this.addItems();
  }

  addItems() {
    this.http.get<any>('https://reqres.in/api/users?page=' + this.pageNumber + '&per_page=' + this.numberOfUsers).subscribe(response => {
      console.log('response: ', response);
      this.users = response.data;
    })
  }

  // Cards
  breakPoints() {
    if (window.innerWidth <= 640) {
      this.columns = 1;
    } else if (window.innerWidth <= 992) {
      this.columns = 2;
    } else {
      this.columns = 3;
    }
  }

  onResize(event) {
    this.breakPoints();
  }
}
