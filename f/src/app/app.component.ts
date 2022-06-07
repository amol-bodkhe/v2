import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from './shared/api.service';
import { EmployeeModel } from './model/employee.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [
		FormControl
	]
})

export class AppComponent implements OnInit {

	title = 'amol-test';

	EmployeeForm!: FormGroup;
	EmployeeData!: any;
	showAdd!: boolean;
	showUpdate!: boolean;
	employeemodelobj: EmployeeModel = new EmployeeModel();
	id: any = null;
	products:any=[];

	constructor(
		private formControl: FormControl,
		private fb: FormBuilder,
		private apiservice: ApiService
	) {
		// 
	}

	ngOnInit() {
		this.EmployeeForm = this.fb.group(
			{
				id: [''],
				firstName: [''],
				lastName: [''],
				email: [''],
				mobile: [''],
				address: [''],
				salary: ['']
			})
		this.getEmployeeDetails();
	}

	getEmployeeDetails() {
		this.apiservice.getEmployee().subscribe((res) => {
			console.log(res);
			this.EmployeeData = res;
		});
	}

	clickAddEmployee() {
		this.EmployeeForm.reset();
		//alert('reset data success..!');
		this.showAdd = true;
		this.showUpdate = false;
	}

	postEmployeeDetails() {
		this.employeemodelobj.firstname = this.EmployeeForm.value.firstName;
		this.employeemodelobj.lastname = this.EmployeeForm.value.lastName;
		this.employeemodelobj.email = this.EmployeeForm.value.email;
		this.employeemodelobj.mobile = this.EmployeeForm.value.mobile;
		this.employeemodelobj.address = this.EmployeeForm.value.address;
		this.employeemodelobj.salary = this.EmployeeForm.value.salary;

		this.apiservice.postEmployee(this.employeemodelobj)
			.subscribe(res => {
				console.log(res);
				alert('Employee Added Successfully..!');
				let ref = document.getElementById('cancel');
				ref?.click();
				this.EmployeeForm.reset();
				this.getEmployeeDetails();
			},
				err => {
					alert('Something Went Wrong!');
				})
	}



	onEdit(row: any) {
		this.showAdd = false;
		this.showUpdate = true;
		this.id = row.id;
		this.EmployeeForm.patchValue({
			firstName: row.firstname,
			lastName: row.lastname,
			email: row.email,
			salary: row.salary,
			address: row.address,
			mobile: row.mobile
		});
		// this.EmployeeForm.controls['firstName'].setValue(row.firstname);
		// this.EmployeeForm.controls['lastName'].setValue(row.lastname);
		// this.EmployeeForm.controls['email'].setValue(row.email);
		// this.EmployeeForm.controls['salary'].setValue(row.salary);
		// this.EmployeeForm.controls['address'].setValue(row.address);
		// this.EmployeeForm.controls['mobile'].setValue(row.mobile);
	}

	updateEmployee() {
		this.employeemodelobj.firstname = this.EmployeeForm.value.firstName;
		this.employeemodelobj.lastname = this.EmployeeForm.value.lastName;
		this.employeemodelobj.email = this.EmployeeForm.value.email;
		this.employeemodelobj.mobile = this.EmployeeForm.value.mobile;
		this.employeemodelobj.address = this.EmployeeForm.value.address;
		this.employeemodelobj.salary = this.EmployeeForm.value.salary;
		this.employeemodelobj.id = this.id;

		this.apiservice.updateEmployee(this.employeemodelobj, this.id).subscribe(res => {
			console.log(this.id)
			alert('updated Successfully..!');

			let ref = document.getElementById('cancel');
			ref?.click();
			this.EmployeeForm.reset();
			this.getEmployeeDetails();
		})
	}

	deleteEmployee(row: any) {
		alert(Number(row.id));
		console.log('row.id',row)

		this.apiservice.deleteEmployee(row.id).subscribe(() => {
			this.getEmployeeDetails();
		});

		// await this.apiservice.deleteEmployee(row.id).subscribe(()=> {
		// 	alert('EmployeeDeleted Successfully..!');
		// 	this.getEmployeeDetails();
		// });
	}
}
