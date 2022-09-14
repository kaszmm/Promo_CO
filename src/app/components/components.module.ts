import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import{MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatInputModule } from '@angular/material/input'



@NgModule({ 
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule
  ]
})
export class ComponentsModule { }
