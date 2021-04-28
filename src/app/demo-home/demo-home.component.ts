import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.css']
})
export class DemoHomeComponent implements OnInit {

  showFeedbackModal = false
  currentUser = false


  constructor() { }

  ngOnInit() {
  }

  setPageToShow(pageToShow: string) {
    //this.sectionToShow = pageToShow;
  }

  openFeedback() {
    this.showFeedbackModal = true;
  }

  closeFeedback() {
    this.showFeedbackModal = false;
  }

  ratingComponentClick(clickObj: any): void {
    // console.log(`ratingComponentClick:`);
    // console.dir(clickObj);

  }
}
