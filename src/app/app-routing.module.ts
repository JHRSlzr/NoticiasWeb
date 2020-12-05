import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsAddComponent } from './components/news-add/news-add.component';


const routes: Routes = [
  { path: 'home', component: NewsListComponent },
  { path: 'new', component: NewsAddComponent },
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
