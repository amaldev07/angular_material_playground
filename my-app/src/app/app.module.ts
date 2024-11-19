import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SimpleMatTableComponent } from './simple-mat-table/simple-mat-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SimpleMatTableWithApiComponent } from './simple-mat-table-with-api/simple-mat-table-with-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTableComponent } from './scroll-table/scroll-table.component';
import { RightPanelDisableComponent } from './right-panel-disable/right-panel-disable.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { SwitchSliderComponent } from './switch-slider/switch-slider.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MergeTavbleCellsComponent } from './merge-tavble-cells/merge-tavble-cells.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMatTableComponent,
    NavbarComponent,
    SimpleMatTableWithApiComponent,
    ScrollTableComponent,
    RightPanelDisableComponent,
    SwitchSliderComponent,
    MergeTavbleCellsComponent,
    ExpansionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
