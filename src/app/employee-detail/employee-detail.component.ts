import { Component, OnInit } from '@angular/core';
import { EmpService } from '../employee-list/emp.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private emp: EmpService) { }

  ngOnInit()
  {
    this.employeeDetail=this.emp.getEmp();

  }
  employeeDetail=[]

}
