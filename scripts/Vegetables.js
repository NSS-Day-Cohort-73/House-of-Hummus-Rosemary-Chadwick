import { setVegetableId } from "./TransientState.js"


export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const data = await response.json()

    document.addEventListener("change", handleVegetableChoice)

    let html = "<h2>Vegetable</h2>"
    html += data.map(vegetable => `
        <div>
            <input type="radio" name="vegetables" value="${vegetable.id}"/>${vegetable.type}
        </div>`
    ).join('')

    return html
}

const handleVegetableChoice = (changeEvent) => {
    if (changeEvent.target.name === "vegetables") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setVegetableId(convertedToInteger)
    }
}