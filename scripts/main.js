import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const html = await FoodTruck()
    mainContainer.innerHTML = html
}

renderAllHTML()

document.addEventListener("newOrderCreated", async () => {
    await renderAllHTML()})