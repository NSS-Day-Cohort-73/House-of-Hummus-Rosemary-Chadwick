import { setEntreeId } from "./TransientState.js"


export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const data = await response.json()

    document.addEventListener("change", handleEntreeChoice)

    let html = "<h2>Base Dish</h2>"
    html += data.map(entree => `
        <div>
            <input type="radio" name="entrees" value="${entree.id}"/>${entree.name}
        </div>`
    ).join('')

    return html
}

export const handleEntreeChoice = (changeEvent) => {
    if (changeEvent.target.name === "entrees") {
        const convertedToInteger = (parseInt(changeEvent.target.value))
        setEntreeId(convertedToInteger)
    }
}