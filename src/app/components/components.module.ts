import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { IncreaserComponent } from './increaser/increaser.component';
import { DonaComponent } from './dona/dona.component';


@NgModule({
  declarations: [IncreaserComponent, DonaComponent],
  exports: [IncreaserComponent, DonaComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
