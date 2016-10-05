var employees = [];
function Employee(fName, jTitle,hSalary){
    this.fullName = fName;
    this.jobTitle = jTitle;
    this.salary = hSalary;
    this.status = status || "full Time"
    this.printEmployeeForm = function(){
        console.log(this.fullName + this.jobTitle + this.salary );
    }
}