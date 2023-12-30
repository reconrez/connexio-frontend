import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { FeedComponent } from './pages/feed/feed.component';
import { CreatePostsComponent } from './pages/feed/create-posts/create-posts.component';
import { AdvertsComponent } from './pages/feed/posts/adverts/adverts.component';
import { PostsComponent } from './pages/feed/posts/posts.component';
import { DiscussionsComponent } from './pages/discussions/discussions.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
