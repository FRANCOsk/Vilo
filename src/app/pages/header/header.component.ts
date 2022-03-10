import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  ngOnInit() {}

  public logout(): void {
    this.tokenService.deleteToken();
    this.router.navigate(['/login']);
  }
}
