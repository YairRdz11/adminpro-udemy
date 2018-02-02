import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { NpagefoundComponent } from './nopagefound/npagefound.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        NpagefoundComponent,
        SidebarComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NpagefoundComponent,
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule {}