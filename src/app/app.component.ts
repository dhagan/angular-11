import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-bah';
  showFeedbackModal = false;

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
