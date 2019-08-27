import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Subscription} from 'rxjs';
import { MessageServiceService } from './services/message-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newTest';
  item: string;
  returnedItem: string;
  message: any[] = [];
  subscription: Subscription;

  @ViewChild(HomeComponent, {static: false}) home: HomeComponent;

  constructor( private messageServiceService: MessageServiceService){

    this.subscription = this.messageServiceService.getMessage().subscribe( message =>{
      if (message) {
        this.message.push(message);
      } else {
        this.message = [];
      }
    });
  }

  getElement(val: string) {
    this.returnedItem = val;
  }
  onclickalert() {
    this.home.onChild();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

