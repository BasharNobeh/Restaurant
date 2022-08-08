var unique = 999;
 
let myForm = document.getElementById("myForm");
myForm.addEventListener('submit', handleSubmitButton);


function handleSubmitButton(e){
    e.preventDefault();
    
    let name = e.target.name.value;
    let type = e.target.type.value;
    let price = e.target.price.value;
    let food = new Constructor (++unique , name,type,price)
   list1.push(food.foodID);
   list2.push(food.name)
   list3.push(food.type);
   list4.push(food.price)
food.render ();
    
    





}



function Constructor(foodID, foodName,type,price){
    this.foodID = foodID;
    this.foodName = foodName;
    this.type = type;
    this.price = price;

    
}
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;


Constructor.prototype.render  = function() {



    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);
    list4[x] = ++unique;
    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("type").value;
    list3[x] = document.getElementById("price").value;
   
    var cel4 = NewRow.insertCell(0);
    var cel1 = NewRow.insertCell(1);
    var cel2 = NewRow.insertCell(2);
    var cel3 = NewRow.insertCell(3);
   
    
    cel4.innerHTML = list4[x];
    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
   

    n++;
    x++;









}

  
  
  
  