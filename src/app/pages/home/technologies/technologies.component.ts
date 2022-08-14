import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  selectedTab: number = 0;

  tabs: any = ["Mobile", "Front End", "Databases", "Backend", "CMS", "Infra & DevOps"];

  mobiles: any = [
    { name: 'IOS', image: '../../../assets/img/home/technology1.png' },
    { name: 'Android', image: '../../../assets/img/home/technology2.png' },
    { name: 'React Native', image: '../../../assets/img/home/technology3.png' },
    { name: 'Flutter', image: '../../../assets/img/home/technology4.png' },
    { name: 'Ionic', image: '../../../assets/img/home/technology5.png' },
    { name: 'Swift', image: '../../../assets/img/home/technology6.png' }
  ]

  frontends: any = [
    { name: 'Angular', image: '../../../assets/img/home/technology7.png' },
    { name: 'React Js', image: '../../../assets/img/home/technology3.png' },
    { name: 'TypeScript', image: '../../../assets/img/home/technology8.png' },
    { name: 'Vue', image: '../../../assets/img/home/technology9.png' },
    { name: 'Javastrip', image: '../../../assets/img/home/technology10.png' },
    { name: 'HTML5', image: '../../../assets/img/home/technology11.png' },
    { name: 'Sass', image: '../../../assets/img/home/technology12.png' },
    { name: 'Bootstrap', image: '../../../assets/img/home/technology13.png' },
    { name: 'Css3', image: '../../../assets/img/home/technology14.png' }
  ]

  databases: any = [
    { name: 'Mongo DB', image: '../../../assets/img/home/technology15.png' },
    { name: 'MySQL', image: '../../../assets/img/home/technology16.png' },
    { name: 'MsSQL', image: '../../../assets/img/home/technology17.png' },
    { name: 'Firebase', image: '../../../assets/img/home/technology18.png' },
    { name: 'DynamoDB', image: '../../../assets/img/home/technology19.png' }
  ]

  backend: any = [
    { name: 'PHP', image: '../../../assets/img/home/technology20.png' },
    { name: 'Ruby Rails', image: '../../../assets/img/home/technology21.png' },
    { name: 'Java', image: '../../../assets/img/home/technology22.png' },
    { name: 'Node .JS', image: '../../../assets/img/home/technology23.png' }
  ]

  cms: any = [
    { name: 'Wordpress', image: '../../../assets/img/home/technology24.png' },
    { name: 'Magento', image: '../../../assets/img/home/technology25.png' },
    { name: 'Shopify', image: '../../../assets/img/home/technology26.png' }
  ]

  infradevOps: any = [
    { name: 'AWS', image: '../../../assets/img/home/technology27.png' },
    { name: 'Appium', image: '../../../assets/img/home/technology28.png' },
    { name: 'Digital ocean', image: '../../../assets/img/home/technology29.png' },
    { name: 'Azure', image: '../../../assets/img/home/technology30.png' },
    { name: 'Gradle', image: '../../../assets/img/home/technology31.png' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(tab: number) {
    this.selectedTab = tab;
  }
}
