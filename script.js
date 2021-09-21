
const inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
myLeads = []



inputBtn.addEventListener("click", function(){

    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log(typeof myLeads)
    console.log(localStorage.getItem("myLeads"))

    

})



function renderLeads(){
let listItems = ""
for(let i=0;i<myLeads.length;i++){
    
    // listItems += "<li><a target='_blank' href='" +myLeads+ "'>"+myLeads[i]+"</a></li>"
       listItems += 
       `<li>
       <a target='_blank' href='${myLeads[i]}'>
       ${myLeads[i]}
       </a>
       </li>`

}
ulEl.innerHTML= ""
ulEl.innerHTML = listItems
}

