import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromRoutes from './Routes';
import * as fromProducts from './Routes/products';
import { HomeComponent } from './Routes/home/home.component';
import { ProductsComponent } from './Routes/products/products.component';
import { ProductEditComponent } from './Routes/products/product-edit/product-edit.component';
import { ProductListComponent } from './Routes/products/product-list/product-list.component';
import { ProductNewComponent } from './Routes/products/product-new/product-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromRoutes.components,
    ...fromProducts.components,
    HomeComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }