let data = [{
    charge:"免費",
    name:"臭臭充電站"
},{
    charge:"投幣式",
    name:"小花充電站"
},{
    charge:"投幣式",
    name:"小明充電站"
},{
    charge:"投幣式",
    name:"小美充電站"
},{
    charge:"投幣式",
    name:"小天充電站"
}];

function init() {
    const electricity = document.querySelector(".list");
    let str = "";
    data.forEach(function(item) {
        let content =`<li>${item.name},${item.charge}</li>`;
        str+=content;
    })
    electricity.innerHTML = str;
}
init();

let button = document.querySelector(".filter");
button.addEventListener("click",function(e){
    if(e.target.value == undefined){
        window.alert("請點擊按鈕");
        return;
    }
    let str="";
    data.forEach(function(item){
    if(e.target.value == "全部"){
        str+=`<li>${item.name},${item.charge}</li>`
    }else if(e.target.value == item.charge){
        str+=`<li>${item.name},${item.charge}</li>`
    }
    })
    const station = document.querySelector(".list");
    station.innerHTML = str;
})

const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const saveButton = document.querySelector(".btn");

saveButton.addEventListener("click",function(e) {
    console.log(stationName.value);
    console.log(stationCharge.value);
    let obj = {};
    obj.charge = stationCharge.value;
    obj.name = stationName.value;
    data.push(obj);
    init();
})
 



