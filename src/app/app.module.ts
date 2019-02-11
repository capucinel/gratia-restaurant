import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { CardComponent } from './perfection/card/card.component';
import { PerfectionComponent } from './perfection/perfection.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LargeBandComponent } from './large-band/large-band.component';
import { DetailsComponent } from './details/details.component';
import { ReachComponent } from './reach/reach.component';
import { CardReachComponent } from './reach/card-reach/card-reach.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardComponent,
    PerfectionComponent,
    LargeBandComponent,
    DetailsComponent,
    ReachComponent,
    CardReachComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlideshowModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
