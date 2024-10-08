import { LightningElement,api } from 'lwc';
export default class StudentTile extends LightningElement {
    
    @api isSelected=false;
     @api student={
        Name:'Sugandha',
        PhotoUrl:'/services/images/photo/003B0FakePictId',
    };
    get tileSelected(){
        return this.isSelected ? "tile selected" : "tile";
    }

    studentClick(){
        alert(this.student.Name);
        debugger
        console.log('Name',This.student.name);
        console.log('PhotoUrl',This.student.PhotoUrl);
    }
}