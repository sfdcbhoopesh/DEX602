import { LightningElement, wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents'; 
import{publish,MessageContext} from 'lightning/messageService';
import SELECTED_STUDENT_CHANNEL from '@salesforce/messageChannel/SelectedStudentChannel__c';

export default class StudentBrowser extends LightningElement {
  selectedDeliveryId='';
  selectedInstructorId=''; 
  @wire(MessageContext) messageContext;
    
    @wire(getStudents,{instructorId:'$selectedInstructorId',courseDeliveryId:'$selectedDeliveryId'})
    students;
    handleFilterChange(event){
      this.selectedInstructorId=event.detail.instructorId;
      this.selectedDeliveryId=event.detail.deliveryId;
    }
    handleStudentSelected(event){
      const studentId=event.detail.studentId;
      this.updateSelectedStudent(studentId);
    }
    updateSelectedStudent(studentId){
      publish(this.messageContext,SELECTED_STUDENT_CHANNEL,{
        studentId:studentId
      });
    }
}
  //  studentList = [];
//constructor() {
   // super();
    // Call the super constructor here...
   // const studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul', 'Amit', 'Simon'];
   // this.studentList = studentNames.map( (studentName, index) => {
     // return {
       // 'sobjectType': 'Contact',
       // 'Name': studentName,
       // 'PhotoUrl': '/services/images/photo/003B0FakePictId',
       // 'Id': index
    //  };
    //});
 // }
//}