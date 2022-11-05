import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './search-result.component';

const routes: Routes = [{ path: '', component: SearchResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class SearchResultRoutingModule { }
