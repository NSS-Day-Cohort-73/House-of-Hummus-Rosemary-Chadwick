

export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    //.then(res => res.json())
    const data = await response.json()

    // let salesDivs = 
    return data.map(sale => {
        const salePrice = sale.entree.price + sale.vegetable.price + sale.side.price

        return `
            <div>
                <article id="placedOrders" value="${sale.id}">
                    Receipt #${sale.id} = ${salePrice.toLocaleString("en-US",{style: "currency", currency: "USD"})}
                </article>
            </div>
        `
    }).join('')

    // salesDivs = salesDivs.join("")
    // return salesDivs
}
