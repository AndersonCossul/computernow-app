import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NbMenuModule } from '@nebular/theme';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    NbMenuModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
