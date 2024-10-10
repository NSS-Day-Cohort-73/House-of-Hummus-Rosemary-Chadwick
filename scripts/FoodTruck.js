import { Entrees } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { saveOrder } from "./saveOrder.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices__entree options">
                
                ${await Entrees()}
            </section>

            <section class="choices__vegetable options">
                ${await Veggies()}
            </section>

            <section class="choices__side options">
                ${await Sides()}
            </section>
        </article>
               
        <article>
             ${await saveOrder()}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
