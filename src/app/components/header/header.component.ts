import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '7px',
        })
      ),
      state('hide',
        style({
          opacity: 0,
        })
      ),

      state('bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '7px',
        })
      ),
      transition('* => *', [
        animate('0.2s'),
      ]),

    ]),


    trigger('openHeader', [
      transition(':enter', [style({ height: '0px' }), animate('0.5s')])
    ]),

    // trigger('openNavbar', [
    //   state('openNav', style({
    //     display: 'block',
    //     height: '250px',
    //     backgroundColor: '#f7f7f7',
    //     width: '90%',
    //     fontSize: '18px',
    //     position: 'absolute',
    //     top: '84px',
    //   })),
    //   state('closeNav', style({ 
    //     height: '0px',

    //    })),
    //   transition('openNav => closeNav', [
    //     animate(1000),
    //   ]),

    // ])
  ]
})
export class HeaderComponent implements OnInit {

  @HostBinding("class.navbar-opened") navbarOpened = false;
  constructor() { }

  ngOnInit(): void {
  }
  menuToggle(): void {
    this.navbarOpened = !this.navbarOpened;
  }
}