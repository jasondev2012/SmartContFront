import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Contabilidad',
                items: [
                    { label: 'Ventas', icon: 'pi pi-fw pi-credit-card', routerLink: ['/contabilidad/ventas'] },
                    { label: 'Compras', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/contabilidad/compras'] },
                    { label: 'Percepciones', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/contabilidad/percepciones'] },
                    { label: 'Retenciones', icon: 'pi pi-fw pi-bookmark-fill', routerLink: ['/contabilidad/retenciones'] },
                    { label: 'Liquidaciones', icon: 'pi pi-fw pi-box', routerLink: ['/contabilidad/liquidaciones'] },
                    { label: 'Cálculo de impuestos', icon: 'pi pi-calculator', routerLink: ['/contabilidad/calculo-impuestos'] },
                ]
            },
            {
                label: 'General',
                items: [
                    { label: 'Configuraciones', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                ]
            }
        ];
    }
}
