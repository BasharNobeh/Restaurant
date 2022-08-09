var unique = 999;
var list1 = [];
 
let myForm = document.getElementById("myForm");
myForm.addEventListener('submit', handleSubmitButton);


function handleSubmitButton(e){
    e.preventDefault();
    
    
    let name = e.target.name.value;
    let type = e.target.type.value;
    let price = e.target.price.value;
    let food = new Constructor (++unique , name,type,price)
    
   list1.push(food);
  
   saveAsJSON(list1);
   
    
    





}
function saveAsJSON(data){
    let myObject = JSON.stringify(data);
    localStorage.setItem("Menu",myObject);

}



function Constructor(foodID, foodName,type,price){
    this.foodID = foodID;
    this.foodName = foodName;
    this.type = type;
    this.price = price;

    
}




  
  
  
  