





function GetData(){
    let stashData =localStorage.getItem("Menu");
    console.log(stashData);
    let myData = JSON.parse(stashData);
    return myData;
}



function ReStyleData(){
    let dataArray = GetData();
    for (let i = 0; i < dataArray.length; i++) {
        list1.push(dataArray[i].foodID);
        list2.push(dataArray[i].foodName);
        list3.push(dataArray[i].type);
        list4.push(dataArray[i].price);
        CreateTable(dataArray[i].foodID , dataArray[i].foodName,dataArray[i].type,dataArray[i].price);


    }


}
var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    
    var n = 1;
    var x = 0;
    




function CreateTable(id , name,type , price){
        var AddRown = document.getElementById('show');
        var NewRow = AddRown.insertRow(n);
        list4[x] = id;
        list1[x] = name;
        list2[x] = type;
        list3[x] = price;
        
       
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
ReStyleData();