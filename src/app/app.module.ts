import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FormsModule} from '@angular/forms';
import { SendMailService } from './send-mail.service';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
  ],
  imports: [
      FormsModule,
      HttpClientModule,
      BrowserModule,
    AppRoutingModule,
      SlickCarouselModule
  ],
  providers: [SendMailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
