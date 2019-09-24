import { Injectable } from '@angular/core';

@Injectable()

export class EmpService
{
    emp=[
        {id: 1, name: 'abd', dept:'cse'},
        {id: 2, name: 'aasdf', dept:'CE'},
        {id: 3, name: 'sfs', dept:'hr'},
        {id: 4, name: 'sdfs', dept:'ME'}
    ]
    getEmp()
    {
        return this.emp
    }
    emp1=[
        {id: 1, name: 'abd', dept:'cse'},
    {id: 2, name: 'aasdf', dept:'CE'},
    {id: 3, name: 'sfs', dept:'hr'},
    {id: 4, name: 'sdfs', dept:'ME'}
    ]
    getEmp1()
    {
        return this.emp1
    }
    setEmp(emp)
    {
        this.emp.push(emp)
    }
}