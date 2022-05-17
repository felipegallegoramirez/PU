import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent} from  './home/home.component'
import { SearchComponent} from './search/search.component'
import { PreviewComponent} from './preview/preview.component'
import { PartsComponent} from './parts/parts.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'parts', component: PartsComponent },]; // sets up routes constant where you define your routes
  

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}