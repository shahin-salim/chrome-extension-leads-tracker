
const inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
myLeads = []

inputBtn.addEventListener("click", function(){

    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()

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

