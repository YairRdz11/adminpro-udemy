import { NgModule } from '@angular/core';
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