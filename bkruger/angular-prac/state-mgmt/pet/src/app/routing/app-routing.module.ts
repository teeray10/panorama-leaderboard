import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from '../comps/blog/articles.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: '', redirectTo: 'articles', pathMatch: 'full' } // to change to 'article' w/ latest article as route param
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
