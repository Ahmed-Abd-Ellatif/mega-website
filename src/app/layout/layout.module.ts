import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, HeaderComponent],
})
export class LayoutModule {}
