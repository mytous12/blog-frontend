import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {AuthGuardService} from './auth-guard.service';
import {WriteComponent} from './write/write.component';
import {PostComponent} from './post/post.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {MyPostsComponent} from './my-posts/my-posts.component';
import {MyGroupsComponent} from './my-groups/my-groups.component';
import {SearchComponent} from './search/search.component';
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';
import {ProfileComponent} from './profile/profile.component';
import {GroupDetailsComponent} from './group-details/group-details.component';
import {EditPostComponent} from './edit-post/edit-post.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'news-feed', component: NewsFeedComponent, canActivate: [AuthGuardService]},
  {path: 'write', component: WriteComponent, canActivate: [AuthGuardService]},
  {path: 'post/:id', component: PostComponent, canActivate: [AuthGuardService]},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuardService]},
  {path: 'my-posts', component: MyPostsComponent, canActivate: [AuthGuardService]},
  {path: 'my-groups', component: MyGroupsComponent, canActivate: [AuthGuardService]},
  {path: 'search/:q', component: SearchComponent, canActivate: [AuthGuardService]},
  {path: 'subscriptions', component: SubscriptionsComponent, canActivate: [AuthGuardService]},
  {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'group-details/:id', component: GroupDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'edit-post/:id', component: EditPostComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, LoginComponent, SignUpComponent, NewsFeedComponent, WriteComponent, PostComponent
  , MyProfileComponent, MyPostsComponent, MyGroupsComponent, SearchComponent, SubscriptionsComponent, ProfileComponent,
  GroupDetailsComponent, EditPostComponent];
