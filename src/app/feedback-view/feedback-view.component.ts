// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-feedback-view',
//   templateUrl: './feedback-view.component.html',
//   styleUrl: './feedback-view.component.css'
// })
// export class FeedbackViewComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ApiService, Feedback } from '../api.service';

@Component({
  selector: 'app-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.css']
})
export class FeedbackViewComponent implements OnInit {
  feedbackList: Feedback[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchFeedback();
  }

  fetchFeedback(): void {
    this.apiService.viewFeedback().subscribe(
      (data: Feedback[]) => {
        this.feedbackList = data;
      },
      (error) => {
        console.error('Error fetching feedback:', error);
      }
    );
  }
}
