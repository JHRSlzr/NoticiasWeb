import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { NewsListComponent } from '../../components/news-list/news-list.component';
import { NewsAddComponent } from '../../components/news-add/news-add.component';


@NgModule({
  declarations: [
    NavBarComponent,
    NewsListComponent,
    NewsAddComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    NavBarComponent,
    NewsListComponent,
    NewsAddComponent
  ]
})
export class ComponentsModule { }
