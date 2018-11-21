/**
 * appModule: Base component bootrstraps the Application
 * @author:Yamini
 */

 /** doc: angular core */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

/** doc:services */
import { HttpService } from './services/htp.service';
import { UserService } from './modules/users/services/users-service';

/** doc:components */
import { AppComponent } from './app.component';
import { UsersDashboardComponent } from './modules/users/users-dashboard/users-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'users/dashboard',
      pathMatch: 'full'
    }, {
      path: 'users/dashboard',
      component: UsersDashboardComponent
    }], {
        enableTracing: true
      })
  ],
  providers: [HttpService, UserService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
