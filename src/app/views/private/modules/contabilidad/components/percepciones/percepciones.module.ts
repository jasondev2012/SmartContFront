import { NgModule } from '@angular/core';
import { PercepcionesGridComponent } from './percepciones-grid/percepciones-grid.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { PercepcionesRoutingModule } from './percepciones-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const PRIMENG_MODULES = [
    CardModule,
    TableModule,
    InputTextModule,
    ButtonModule
]
@NgModule({
	imports: [
        ...PRIMENG_MODULES,
		CommonModule,
		PercepcionesRoutingModule
	],
	declarations: [PercepcionesGridComponent]
})
export class PercepcionesModule { }
