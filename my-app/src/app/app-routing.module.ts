import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleMatTableComponent } from './simple-mat-table/simple-mat-table.component';
import { SimpleMatTableWithApiComponent } from './simple-mat-table-with-api/simple-mat-table-with-api.component';
import { ScrollTableComponent } from './scroll-table/scroll-table.component';
import { RightPanelDisableComponent } from './right-panel-disable/right-panel-disable.component';
import { SwitchSliderComponent } from './switch-slider/switch-slider.component';
import { MergeTavbleCellsComponent } from './merge-tavble-cells/merge-tavble-cells.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { SearchComponent } from './search/search.component';
import { SidenavCollapsibleComponent } from './sidenav-collapsible/sidenav-collapsible.component';
import { MyGridListComponent } from './my-grid-list/my-grid-list.component';
import { TeatAreaSpaceIssueComponent } from './teat-area-space-issue/teat-area-space-issue.component';
import { FormGrpComponent } from './form-grp/form-grp.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { TwoSectionComponent } from './two-section/two-section.component';
import { TailwindStylesComponent } from './tailwind-styles/tailwind-styles.component';
import { MyMultiSelectComponent } from './my-multi-select/my-multi-select.component';
import { AutocompleteMultiSelectComponent } from './autocomplete-multi-select/autocomplete-multi-select.component';

const routes: Routes = [
  { path: '', redirectTo: '/simple-mat-table', pathMatch: 'full' },
  { path: 'simple-mat-table', component: SimpleMatTableComponent },
  { path: 'simple-table-withapi', component: SimpleMatTableWithApiComponent },
  { path: 'scroll-table', component: ScrollTableComponent },
  { path: 'right-panel-disable', component: RightPanelDisableComponent },
  { path: 'switch-slider', component: SwitchSliderComponent },
  { path: 'merger-table-cells', component: MergeTavbleCellsComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'auto-complete', component: SearchComponent },
  { path: 'sidenav-collapsible', component: SidenavCollapsibleComponent },
  { path: 'my-grid-list', component: MyGridListComponent },
  { path: 'teat-area-spaceissue', component: TeatAreaSpaceIssueComponent },
  { path: 'form-grp-alignment', component: FormGrpComponent },
  { path: 'my-grid', component: MyGridComponent },
  { path: 'two-section', component: TwoSectionComponent },
  { path: 'tailwind-css', component: TailwindStylesComponent },
  { path: 'multi-select', component: MyMultiSelectComponent },
  { path: 'autocomplete-multi-select', component: AutocompleteMultiSelectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

