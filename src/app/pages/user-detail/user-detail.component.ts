import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service.service';
import { UserData } from 'src/app/model/userDataModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // stored for future actions with user
  private userId: number;
  public userData: UserData;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.userId = +this.activatedRoute.snapshot.paramMap.get('id');

    this.getData(this.userId)
  }

  private getData(userId: number): void {
    this.http.get<any>('https://reqres.in/api/users/' + userId) .pipe(
      catchError(error => {
          if (error.status === 404) {
              this.router.navigate(['/not-found']);
          } 
          return of([]);
      }))
    .subscribe(
      response => {
        this.userData = response.data;
      }
    );

  }
}
