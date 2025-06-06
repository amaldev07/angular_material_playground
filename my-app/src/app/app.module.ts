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
import { MatRadioModule } from '@angular/material/radio';
import { SwitchSliderComponent } from './switch-slider/switch-slider.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MergeTavbleCellsComponent } from './merge-tavble-cells/merge-tavble-cells.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { SearchComponent } from './search/search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavCollapsibleComponent } from './sidenav-collapsible/sidenav-collapsible.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyGridListComponent } from './my-grid-list/my-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TeatAreaSpaceIssueComponent } from './teat-area-space-issue/teat-area-space-issue.component';
import { MyTabGroupComponent } from './my-tab-group/my-tab-group.component';
import { FormGrpComponent } from './form-grp/form-grp.component';
import { MatCardModule } from '@angular/material/card';
import { MyGridComponent } from './my-grid/my-grid.component';
import { TwoSectionComponent } from './two-section/two-section.component';
import { TailwindStylesComponent } from './tailwind-styles/tailwind-styles.component';
import { MyMultiSelectComponent } from './my-multi-select/my-multi-select.component';
import { MatSelectModule } from '@angular/material/select';
import { AutocompleteMultiSelectComponent } from './autocomplete-multi-select/autocomplete-multi-select.component';


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
    ExpansionPanelComponent,
    SearchComponent,
    SidenavCollapsibleComponent,
    MyGridListComponent,
    TeatAreaSpaceIssueComponent,
    MyTabGroupComponent,
    FormGrpComponent,
    MyGridComponent,
    TwoSectionComponent,
    TailwindStylesComponent,
    MyMultiSelectComponent,
    AutocompleteMultiSelectComponent
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
    ReactiveFormsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatIconModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
