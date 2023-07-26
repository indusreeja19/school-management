import { Component } from '@angular/core';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent {
  formData = {
    studentName: '',
    dob: '',
    studentEmail: '',
    studentPhone: '',
    guardianName: '',
    guardianPhone: '',
    address: '',
    grade: '',
    branch: ''

}
onSubmit() {
  
  console.log(this.formData);
}
}
