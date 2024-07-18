import { baklava, brownie, cake, cremeBrulee, macaron, meringue, pannaCotta, tiramisu, waffle } from "../assets/images";
import { ProductType } from "../components";

export const products: ProductType[] = [
    {
        id: 1,
        image: waffle,
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
    },
    {
        id: 2,
        image: cremeBrulee,
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0,
    },
    {
        id: 3,
        image: macaron,
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0,
    },
    {
        id: 4,
        image: tiramisu,
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5,
    },
    {
        id: 5,
        image: baklava,
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0,
    },
    {
        id: 6,
        image: meringue,
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0,
    },
    {
        id: 7,
        image: cake,
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5,
    },
    {
        id: 8,
        image: brownie,
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5,
    },
    {
        id: 9,
        image: pannaCotta,
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5,
    },
];
