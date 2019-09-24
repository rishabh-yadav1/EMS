import { Component } from '@angular/core';
import { EmpService } from './employee-list/emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rishabh24';
  constructor(private emp: EmpService)
  {

  }
  emp_id
  emp_name
  emp_dept
  myEmp=
  {
    id: 1 ,
    name:'',
    dept:''
  }
   addEmp()
  {
    this.myEmp.id=this.emp_id
    this.myEmp.name=this.emp_name
    this.myEmp.dept=this.emp_dept
    this.emp.setEmp(this.myEmp)
  }
}
