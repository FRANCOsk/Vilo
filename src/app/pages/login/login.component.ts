import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MatDialog } from "@angular/material";
import { OpenDialogComponent } from "../open-dialog/open-dialog.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showError: boolean;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.showError = false;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      password: new FormControl("", Validators.required),
    });
  }

  public cancel(): void {
    this.loginForm.reset();
  }

  public openDialog() {
    const dialogRef = this.dialog.open(OpenDialogComponent, {
      data: this.loginForm.value.email,
    });
    dialogRef.afterClosed().subscribe(() => console.log("Dialog was closed"));
  }

  public login(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      console.log("invalid");
    } else {
      const sendData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.http
        .post<any>("https://reqres.in/api/login?delay=3", sendData)
        .pipe(
          catchError((error) => {
            if (error.status === 400) {
              this.showError = true;
            }
            return of([]);
          })
        )
        .subscribe((response) => {
          if (response.token) {
            this.showError = false;
            this.tokenService.setToken(response.token);
            this.router.navigate(["/user-list"]);
          }
        });
    }
  }
}
