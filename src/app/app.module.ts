import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserTileComponent } from './pages/user-tile/user-tile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule, MatButtonModule, MatDialog, MatDialogModule } from '@angular/material';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInterceptor } from './services/http-client-interceptor.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DialogComponent } from './dialog/dialog.component';
import { OpenDialogComponent } from './pages/open-dialog/open-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    UserDetailComponent,
    UserTileComponent,
    NotFoundComponent,
    HeaderComponent,
    DialogComponent,
    OpenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    InfiniteScrollModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents:[OpenDialogComponent]
})
export class AppModule { }

