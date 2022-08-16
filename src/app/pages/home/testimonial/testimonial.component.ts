import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  testimonial: any = [];
  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 2,
    "arrows": false,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };


  constructor() { }

  ngOnInit(): void {
    this.testimonial = [
      {
        id: 1,
        text: 'The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.',
        image: './assets/img/man.jpg',
        name: 'Muhammad Talha',
        job: 'Software Engineer',
      },
      {
        id: 2,
        text: 'Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today market.',
        image: './assets/img/man.jpg',
        name: 'Shadab Rajpot',
        job: 'Web Developer',
      },
      {
        id: 3,
        text: 'Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to anyone!',
        image: './assets/img/girl1.jpg',
        name: 'Fatima Arain',
        job: 'Full Stack Developer',
      },
      {
        id: 4,
        text: 'What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!',
        image: './assets/img/man.jpg',
        name: 'Sufiyan Ahmed',
        job: 'Backend Developer',
      },
      {
        id: 5,
        text: 'Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised.',
        image: './assets/img/girl1.jpg',
        name: 'Olivia Yates',
        job: 'NodeJS Developer',
      },
      {
        id: 6,
        text: 'I had a great experience with the whole Thrashtect Solution team. They were very knowledgeable and professional, and I highly recommend them!',
        image: './assets/img/man.jpg',
        name: 'Saeed Memon',
        job: 'Web Developer',
      },
      {
        id: 7,
        text: 'Great support in building a WordPress website. I needed a very specific type of site put together fairly quickly and they did a superb job. Very professional, engaging, responsive. I highly recommend',
        image: './assets/img/girl1.jpg',
        name: 'Mehwish Paracha',
        job: 'Full Stack Developer',
      },
      {
        id: 8,
        text: 'What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!',
        image: './assets/img/man.jpg',
        name: 'Furkan Ahmed',
        job: 'Software Engineer',
      }
    ]
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }
}
