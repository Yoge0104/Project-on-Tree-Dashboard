var Dashboard = document.querySelector(".Dashboard-block");
var DashboardTop = document.querySelector(".top-Dashboard");
var select = document.getElementById("numberSelect");
var Result = document.querySelector(".Result-block");
var Result_box = document.querySelector(".top-Result");

function main(){
    let a = 1;
DashboardTop.addEventListener("click", function(){

    if(a == 1){
        Dashboard.style.display = "none";
        DashboardTop.style.backgroundColor = "#edede9";
        DashboardTop.style.color = "black"
        
        a=0;
    }else{
        Dashboard.style.display = "block";
        DashboardTop.style.backgroundColor = "#1870FF";
        DashboardTop.style.color = "white"
        a=1;
    }
 });
 

 let b = 1;
 Result_box.addEventListener("click", function(){
 
     if(b == 1){
         Result.style.display = "none";
         Result_box.style.backgroundColor = "#edede9";
         Result_box.style.color = "black"
         b=0;
     }else{
         Result.style.display = "block";
         Result_box.style.backgroundColor = "#1870FF";
         Result_box.style.color = "white"
         b=1;
     }
  });


  for( var i = 1; i <= 100; i++){
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    select.appendChild(option);
  }
}
main();



const population = [
    {
        RegistrationNo: "CBODT/E/2022/20436",
        Actions: 122,
        Duplicate: 15,
        Is_Duplicate: "Yes",
        oldest_id: "CBODT/E/2"
    },
    {
        RegistrationNo: "DOSEL/E/2022/09819",
        Actions: 122,
        Duplicate: 0,
        Is_Duplicate: "No",
        oldest_id: ""
    },
    {
        RegistrationNo: "DPOST/E/2022/38446",
        Actions: 121,
        Duplicate: 0,
        Is_Duplicate: "No",
        oldest_id: ""
    },
    {
        RegistrationNo: "DEABD/E/2023/0004041",
        Actions: 120,
        Duplicate: 143,
        Is_Duplicate: "Yes",
        oldest_id: "DEABD/E/2"
    },
    {
        RegistrationNo: "DOPATE/E/2022/11935",
        Actions: 119,
        Duplicate: 4,
        Is_Duplicate: "Yes",
        oldest_id: "DOPAT/E/2"
    },
    {
        RegistrationNo: "DEABD/E/2022/44850",
        Actions: 119,
        Duplicate: 175,
        Is_Duplicate: "Yes",
        oldest_id: "DOSEL/E/2"
    },
    {
        RegistrationNo: "DPOST/E/2023/0001336",
        Actions: 119,
        Duplicate: 4,
        Is_Duplicate: "Yes",
        oldest_id: "DPOST/E/2"
    },
    {
        RegistrationNo: "DPOST/E/2022/30065",
        Actions: 118,
        Duplicate: 0,
        Is_Duplicate: "No",
        oldest_id: ""
    },
    {
        RegistrationNo: "DCOYA/E/2022/04910",
        Actions: 118,
        Duplicate: 7,
        Is_Duplicate: "Yes",
        oldest_id: "DCOM/E/"
    },
    {
        RegistrationNo: "DEABD/E/2022/71901",
        Actions: 117,
        Duplicate: 175,
        Is_Duplicate: "Yes",
        oldest_id: "DOSEL/E/2"
    },
    {
        RegistrationNo: "CBODT/E/2022/16557",
        Actions: 117,
        Duplicate: 0,
        Is_Duplicate: "No",
        oldest_id: ""
    },

    {
        RegistrationNo: "CBODT/E/2022/34219",
        Actions: 116,
        Duplicate: 0,
        Is_Duplicate: "No",
        oldest_id: ""
    },
    {
        RegistrationNo: "DOPPW/E/2022/02367",
        Actions: 115,
        Duplicate: 0,
        Is_Duplicate: "NO",
        oldest_id: ""
    },
    {
        RegistrationNo: "DEABD/E/2022/39913",
        Actions: 113,
        Duplicate: 175,
        Is_Duplicate: "Yes",
        oldest_id: "DOSEL/E/2"
    },
    {
        RegistrationNo: "DPOST/E/2022/41517",
        Actions: 113,
        Duplicate: 0,
        Is_Duplicate: "No",
        oldest_id: ""
    },
    {
        RegistrationNo: "DOSEL/E/2023/0000147",
        Actions: 113,
        Duplicate: 1,
        Is_Duplicate: "Yes",
        oldest_id: "PMOPG/E/2"
    },
    {
        RegistrationNo: "PMOPG/E/2022/00569921",
        Actions: 112,
        Duplicate: 0,
        Is_Duplicate: "attachment",
        oldest_id: ""
    },
    {
        RegistrationNo: "DPOST/E/2022/28125",
        Actions: 111,
        Duplicate: 1,
        Is_Duplicate: "Yes",
        oldest_id: "DPOST/E/2"
    },
    {
        RegistrationNo: "PMOPG/E/2022/02298",
        Actions: 111,
        Duplicate: 1,
        Is_Duplicate: "Yes",
        oldest_id: "PMOPG/E/2"
    },
    {
        RegistrationNo: "DPOST/E/2022/00178",
        Actions: 111,
        Duplicate: 1,
        Is_Duplicate: "Yes",
        oldest_id: "DPOST/E/2"
    },
    {
        RegistrationNo: "PMOPG/D/2022/00088",
        Actions: 111,
        Duplicate: 0,
        Is_Duplicate: "Yes",
        oldest_id: ""
    },
    {
        RegistrationNo: "DPOST/E/2022/09969",
        Actions: 111,
        Duplicate: 3,
        Is_Duplicate: "Yes",
        oldest_id: "DPOST/E/2"
    },
    {
        RegistrationNo: "CBODT/E/2022/03322",
        Actions: 110,
        Duplicate: 2,
        Is_Duplicate: "Yes",
        oldest_id: "CBODT/E/2"
    },
    {
        RegistrationNo: "PMOPG/D/2022/0186031",
        Actions: 110,
        Duplicate: 0,
        Is_Duplicate: "attachment",
        oldest_id: ""
    },

    {
        RegistrationNo: "DEABD/E/2022/45073",
        Actions: 110,
        Duplicate: 175,
        Is_Duplicate: "Yes",
        oldest_id: "DOSEL/E/2"
    },
    {
        RegistrationNo: "CLCO7/P/2022/00254",
        Actions: 109,
        Duplicate: 0,
        Is_Duplicate: "0",
        oldest_id: ""
    },
    {
        RegistrationNo: "CBODT/E/2022/21284",
        Actions: 109,
        Duplicate: 4,
        Is_Duplicate: "Yes",
        oldest_id: "CBODT/E/2"
    },
    {
        RegistrationNo: "DPOST/E/2022/27826",
        Actions: 119,
        Duplicate: 175,
        Is_Duplicate: "Yes",
        oldest_id: "DOSEL/E/2"
    },
    {
        RegistrationNo: "DEABD/E/2022/44850",
        Actions: 119,
        Duplicate: 175,
        Is_Duplicate: "Yes",
        oldest_id: "DOSEL/E/2"
    },
];


var king = document.querySelector(".Result-left-table-main-table");
// console.log(king)


king.innerHTML = ""

for (const key in population) {
    // console.log(population[key].RegistrationNo)
    king.innerHTML = king.innerHTML + `<div class="Result-left-table-box">
    <div>${population[key].RegistrationNo}</div>
        <div>${population[key].Actions}</div>         
        <div>${population[key].Duplicate}</div>
       <div>${population[key].Is_Duplicate}</div>
        <div>${population[key].oldest_id}</div>
</div>`
}
