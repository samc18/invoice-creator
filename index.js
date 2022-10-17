let services = []

const washCarBtn = document.getElementById("washcar")
const mowLawnBtn = document.getElementById("mowlanw")
const pullWheelsBtn = document.getElementById("pullwheels")
const sendInvoiceBtn = document.getElementById("sendinvoice")
const amountsItems = document.getElementById("amounts-items")
const totalAmountHtml = document.getElementById("total-amount")

washCarBtn.addEventListener("click", () => {
    const findObj = services.find(element => element.name === "Wash Car")
    if (findObj) {
        return
    }
    const washCarObj = {
        name: "Wash Car",
        price: 10,
        html: `<div class="amounts-item">
                    <p class="job">Wash Car</p>
                    <p class="remove">Remove</p>
                    <p class="price"><span>$</span>10</p>
                </div>`
    }
    services.push(washCarObj)
    amountsItems.innerHTML += washCarObj.html
    calculateTotalAmount()
    removeItems()
})

mowLawnBtn.addEventListener("click", () => {
    const findObj = services.find(element => element.name === "Mow Lawn")
    if (findObj) {
        return
    }
    const mowLawnObj = {
        name: "Mow Lawn",
        price: 20,
        html: `<div class="amounts-item">
                    <p class="job">Mow Lawn</p>
                    <p class="remove">Remove</p>
                    <p class="price"><span>$</span>20</p>
                </div>`
    }
    services.push(mowLawnObj)
    amountsItems.innerHTML += mowLawnObj.html
    calculateTotalAmount()
    removeItems()
})

pullWheelsBtn.addEventListener("click", () => {
    const findObj = services.find(element => element.name === "Pull Wheels")
    if (findObj) {
        return
    }
    const pullwheelsObj = {
        name: "Pull Wheels",
        price: 30,
        html: `<div class="amounts-item">
                    <p class="job">Pull Wheels</p>
                    <p class="remove">Remove</p>
                    <p class="price"><span>$</span>30</p>
                </div>`
    }
    services.push(pullwheelsObj)
    amountsItems.innerHTML += pullwheelsObj.html
    calculateTotalAmount()
    removeItems()
})

sendInvoiceBtn.addEventListener("click", () => {
    services = []
    amountsItems.innerHTML = ""
    calculateTotalAmount()
})

function removeItems() {
    const items = document.getElementsByClassName("remove")
    const itemsArray = [...items]
    itemsArray.forEach(item => {
        item.addEventListener("click", () => {
            const index = services.findIndex(service => service.name === item.parentElement.children[0].textContent)
            services.splice(index, 1)
            amountsItems.removeChild(item.parentElement)
            calculateTotalAmount()
        })
    })    
}

function calculateTotalAmount() {
    let totalAmount = 0
    services.map(item => {
        totalAmount += item.price
    })
    totalAmountHtml.textContent = `$${totalAmount}`
}