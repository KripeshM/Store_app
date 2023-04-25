import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreManagerComponent } from './store-manager/store-manager.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  {
    path:'',redirectTo:'store/admin',pathMatch:'full'
  },
  {
    //localhost:4200/contact/admin
    path:'store/admin',component:StoreManagerComponent
  },
  {
    //localhost:4200/contact/add
    path:'store/add',component:AddItemComponent
  },
  {
    //localhost:4200/contact/update
    path:'store/update/:itemId',component:UpdateItemComponent
  },
  {
    //localhost:4200/contact/view
    path:'store/view/:itemId',component:ViewItemComponent
  },
  {
    //localhost:4200/contact/page not found
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
