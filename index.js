class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;		// Complete the code!
	}
	fullname() {
		console.log(`${this.firstname} ${this.lastname}`);
	}
	email() {
		console.log((`${this.firstname}.${this.lastname}@company.com`).toLowerCase());
	}

}





const emp1 = new Employee("John", "Smith");
console.log(emp1);

emp1.fullname(); // "John Smith"
emp1.email(); // john.smith@company.com
console.log(emp1.firstname); //John

const emp2 = new Employee("Mary",  "Sue"); 

emp2.fullname(); // Mary Sue
emp2.email(); // mary.sue@company.com
console.log(emp2.firstname); // Mary

const emp3 = new Employee("Antony", "Walker");

emp3.fullname(); // Antony Walker
emp3.email(); //antony.walker@company.com
console.log(emp3.firstname); // Antony