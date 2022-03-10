import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/userDataModel';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent implements OnInit {

  @Input() userData: UserData;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public openUserDetail() : void {
    this.router.navigate(['/user-detail/',this.userData.id]);
  }
}
