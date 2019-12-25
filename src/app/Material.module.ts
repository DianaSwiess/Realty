import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule,
   MatDividerModule, MatListModule, } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class MaterialModule {
}

