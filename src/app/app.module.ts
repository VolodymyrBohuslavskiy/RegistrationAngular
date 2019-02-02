import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegComponent} from './components/reg/reg.component';
import {LogComponent} from './components/log/log.component';
import {FormsModule} from '@angular/forms';
import {UserlistComponent} from './components/userlist/userlist.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './components/post/post.component';


const routes: Routes = [
  {path: 'log', component: LogComponent},
  {path: 'reg', component: RegComponent},
  {path: 'all', component: UserlistComponent},
  {path: 'post', component: PostComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LogComponent,
    UserlistComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
