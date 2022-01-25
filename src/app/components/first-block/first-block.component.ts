import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,

} from '@angular/animations';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ]),
  
    trigger('right_container_slide_in',[
      transition('void => *',[style({
        transform: 'translateX(100%)'
    }),
     animate('0.5s 0.5s')])
    ]),
    trigger('left_container_slide_in',[
      transition('void => *',[style({
        transform: 'translateX(-120%)'
    }),
     animate('0.5s 1s')])
    ]),
  
    
  ]

})
export class FirstBlockComponent implements OnInit {
public leftStart = '';
  constructor() { }

  ngOnInit(): void {
  }

}
