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
      (data: any) => { // Use 'any' type to handle object data
        // Convert object data to array
        if (data != null) {
          const feedbackarray: Feedback[] = Object.values(data.message);

          // Assign the array to 'this.appointments'
          this.feedbackList = feedbackarray;

          // Log the appointments array
          console.log(this.feedbackList);
        }
      },
      (error) => {
        console.error('Error fetching feedback:', error);
      }
    );
  }
}
