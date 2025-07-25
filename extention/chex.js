let myLeads = []
const inputEl = document.getElementById("input-el")
let inputButton = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el") 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteButton = document.getElementById("del-btn")
const tabButton = document.getElementById("tab-btn")


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}   

tabButton.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteButton.addEventListener("dblclick", function(){
    console.log("dbl");
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})

inputButton.addEventListener("click", function clicked(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)    
})

function render(leads){
    let listItems = ""
    for (let i = 0;  i < leads.length; i++) {
        listItems += `<li>
         <a target = '_blank' href = '#'>${leads[i]}</a>
         </li>`
    }
    ulEL.innerHTML = listItems
}

