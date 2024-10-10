import { setSideId } from "./TransientState.js"


export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const data = await response.json()

    document.addEventListener("change", handleSideChoice)

    let html = "<h2>Sides</h2>"
    html += data.map(side => `
        <div>
            <input type="radio" name="sides" value="${side.id}"/>${side.title}
        </div>`
    ).join('')

    return html
}

export const handleSideChoice = (changeEvent) => {
    if (changeEvent.target.name === "sides") {
        const convertedToInteger = (parseInt(changeEvent.target.value))
        setSideId(convertedToInteger)
    }
}
