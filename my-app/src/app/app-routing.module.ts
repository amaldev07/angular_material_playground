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
<<<<<<< HEAD
import { MyGridListComponent } from './my-grid-list/my-grid-list.component';
=======
import { TeatAreaSpaceIssueComponent } from './teat-area-space-issue/teat-area-space-issue.component';
>>>>>>> 29c0d54cf42d92bbc91c30e4e5e5e75a65811965

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
<<<<<<< HEAD
  { path: 'my-grid-list', component: MyGridListComponent },
=======
  { path: 'teat-area-spaceissue', component: TeatAreaSpaceIssueComponent },
>>>>>>> 29c0d54cf42d92bbc91c30e4e5e5e75a65811965
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

