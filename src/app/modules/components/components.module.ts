import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Componentes
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { NewsListComponent } from '../../components/news-list/news-list.component';
import { NewsAddComponent } from '../../components/news-add/news-add.component';


@NgModule({
  declarations: [
    NavBarComponent,
    NewsListComponent,
    NewsAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [
    NavBarComponent,
    NewsListComponent,
    NewsAddComponent
  ]
})
export class ComponentsModule { }
