import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,MatInputModule, MatFormFieldModule, MatListModule   
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class SharedModule { }
