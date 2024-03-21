import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, Feedback } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrl: './create-feedback.component.css'
})
export class CreateFeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.feedbackForm.invalid) {
      return;
    }

    const name = this.feedbackForm.controls['name'].value;
    const email = this.feedbackForm.controls['email'].value;
    const subject = this.feedbackForm.controls['subject'].value;
    const phone = this.feedbackForm.controls['phone'].value;
    const message = this.feedbackForm.controls['message'].value;



    const feedback: Feedback = {
      name,
      email,
      subject,
      phone,
      message
    };

    this.apiService.feedback(feedback).subscribe(
      () => {
        this.router.navigate(['/dashboard']); // Redirect to dashboard on successful login
      },
      (error) => {
        this.error = error.message || 'An error occurred. Please try again.'; // Display error message
      }
    );
  }
}
