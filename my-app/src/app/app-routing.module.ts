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
import { TeatAreaSpaceIssueComponent } from './teat-area-space-issue/teat-area-space-issue.component';

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
  { path: 'teat-area-spaceissue', component: TeatAreaSpaceIssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

