import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div><img src="https://media1.giphy.com/media/H54feNXf6i4eAQubud/giphy.gif" alt=""></div>`,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
