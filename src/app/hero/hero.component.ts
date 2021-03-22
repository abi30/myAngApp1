import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;
  heroText: string;
  heroBtnText : string;
  heroBtnUrl:   string ;
  constructor() { 

    this.heroHeading=`Code Factory`;
    this.heroText=`The demand, to teach coding as a modern "language" in schools is also voiced on a state-level both here and abroad. The realization of this goal, to have a high-quality and standardized IT-education in the curriculum, is still a long way  off though.`;
    this.heroBtnText=`Learn more`;
    this.heroBtnUrl=`https://codefactory.wien/en/home-en/`;

  }

  ngOnInit(): void {
  }

}
