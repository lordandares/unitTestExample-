import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() item: string;

 @Output() newItemEvent = new EventEmitter<string>();

  text: string;
  constructor( private messageServiceService: MessageServiceService) { }

  ngOnInit() {
  }

  onEditButtonClick(val: string) {
    this.newItemEvent.emit(val);
    console.log(val);
  }

  onChild() {
    alert('entra a child');
  }

  sendMessage(): void {
    this.messageServiceService.sendMessage(this.item);
  }



}
