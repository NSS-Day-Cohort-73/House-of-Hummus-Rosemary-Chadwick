import { saveFoodOrder } from "./TransientState.js"


export const saveOrder = () => {
    document.addEventListener("click", handleOrderClick)
    return  `<button id="purchase">Purchase Combo</button>`
}

const handleOrderClick = async (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        await saveFoodOrder()
    }
}