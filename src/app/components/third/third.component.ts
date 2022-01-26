import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  dynamicSlidesFirstRow = [
    {
      id: '1',
      src: '../../../assets/img/portfolio-01.jpg',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: '2',
      src: '../../../assets/img/portfolio-02.jpg',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: '3',
      src: '../../../assets/img/portfolio-03.jpg',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: '4',
      src: '../../../assets/img/portfolio-04.jpg',
      alt: 'Side 4',
      title: 'Side 4'
    },

  ]

  dynamicSlidesSecondRow = [
    {
      id: '2',
      src: '../../../assets/img/portfolio-02.jpg',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: '1',
      src: '../../../assets/img/portfolio-05.jpg',
      alt: 'Side 5',
      title: 'Side 5'
    },
    {
      id: '3',
      src: '../../../assets/img/portfolio-04.jpg',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: '4',
      src: '../../../assets/img/portfolio-01.jpg',
      alt: 'Side 1',
      title: 'Side 1'
    },

  ]

  constructor() { }
  portfolioOptions: OwlOptions = {
    center: true,
    items: 2,
    dots: true,
    loop: true,
    nav: true,
    margin: 30,
    navText: ['<span aria-label="Previous">‹</span>','<span aria-label="Next">›</span>'],
    responsive: {

      992: {
        items: 4
      }
    }

  }

  ngOnInit(): void {
  }

}
