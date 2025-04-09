import { ApplicationConfig } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule, provideRouter } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';
import { DataService } from "./core/services/data.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'assets/data.json' },
    { path: 'page1', component: Page1Component, canActivate:[confirmInGuard] },
    { path: 'page2', component: Page2Component, canDeactivate: [confirmOutGuard] },
    { path: 'page3/:id', component: Page3Component },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [DataService]
})

export class AppModule {}

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes)]
  };