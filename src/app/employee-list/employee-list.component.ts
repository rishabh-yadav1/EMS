import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private emp1:EmpService) 
  { 

  }

  ngOnInit()
  {
    this.employeeDetail=this.emp1.getEmp1();
  }
  employeeDetail=[]
}
