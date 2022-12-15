function createEmployeeRecord(employeearray) {
    let emloyee={
        firstName:employeearray[0],
        familyName:employeearray[1],
        title:employeearray[2],
        payPerHour:employeearray[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return emloyee;
  }
  function createEmployeeRecords(employees){
    return employees.map(element=>{
        return createEmployeeRecord(element);
    })
  }

  function calculatePayroll() {
    let employeeBurden = 11880;
    return employeeBurden;
  }

  function createTimeInEvent (date){
    let yourDate = date.split(" ");
    let inTime = {
    type: "TimeIn",
    hour: parseInt(yourDate[1]),
    date: yourDate[0],
    };
    this.timeInEvents = [...this.timeInEvents, inTime];
    return this;
    }

    function createTimeOutEvent (date){
    let yourDate = date.split(" ");
    let outTime = {
    type: "TimeOut",
    hour: parseInt(yourDate[1]),
    date: yourDate[0],
    };
    this.timeOutEvents = [...this.timeOutEvents, outTime];
    return this;
    }
    function hoursWorkedOnDate (date){
        for (let i = 0; i < this.timeInEvents.length; i++) {
        if (date === this.timeInEvents[i].date) {
        let arrivalTime = this.timeInEvents[i].hour;
        let departureTime = this.timeOutEvents[i].hour;
        let timeTaken = departureTime - arrivalTime;
        return timeTaken / 100;
        }
   }
  }
  function wagesEarnedOnDate(date){
  let timeTaken=hoursWorkedOnDate.call(this,date)
  return timeTaken*this.payPerHour;
  }
  function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find((records)=>{
    return records.firstName===firstName;
  })
  }

  function allWagesFor () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}