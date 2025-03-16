let employee : {

    readonly id :number,
    name :string,
    retired: (date: Date) => void} = 
{
     id:1, 
     name:"valentine",
     retired : (date: Date) => {
         console.log("retired on", date);
     }
};


employee.name = "valentine";
console.log(employee);