const menu = [
    {
        id: 1,
        title: "Milanesa con papas",
        category: "almuerzo",
        price: 7600,
        img: "milanesa.jpg",
        description: "Deliciosa milanesa de carne frita en doble apanado, acomapañada de crujientes papas fritas"
    },
    {
        id: 1,
        title: "Milanesa con papas",
        category: "almuerzo",
        price: 7600,
        img: "milanesa.jpg",
        description: "Deliciosa milanesa de carne frita en doble apanado, acomapañada de crujientes papas fritas"
    },
    {
        id: 1,
        title: "Milanesa con papas",
        category: "almuerzo",
        price: 7600,
        img: "milanesa.jpg",
        description: "Deliciosa milanesa de carne frita en doble apanado, acomapañada de crujientes papas fritas"
    },
    {
        id: 1,
        title: "Milanesa con papas",
        category: "almuerzo",
        price: 7600,
        img: "milanesa.jpg",
        description: "Deliciosa milanesa de carne frita en doble apanado, acomapañada de crujientes papas fritas"
    },
    {
        id: 1,
        title: "Milanesa con papas",
        category: "almuerzo",
        price: 7600,
        img: "milanesa.jpg",
        description: "Deliciosa milanesa de carne frita en doble apanado, acomapañada de crujientes papas fritas"
    },
    {
        id: 1,
        title: "Milanesa con papas",
        category: "almuerzo",
        price: 7600,
        img: "milanesa.jpg",
        description: "Deliciosa milanesa de carne frita en doble apanado, acomapañada de crujientes papas fritas"
    },
];

const items = document.querySelector(".items");


window.addEventListener('DOMContentLoaded', function(){
    let displayItem = menu.map(function(item){
    return `<article class="article">
    <img src="${item.img}" alt="" height="200px" width="400px" class="item-img">
    <div class="info-item">
        <header class="item-header">
            <h4>${item.title}</h4>
            <h4 class="price">CLP ${item.price}</h4>
        </header>
        <p class="item-description">${item.description}</p>
    </div>
</article>`
    });
    displayItem = displayItem.join("");
    items.innerHTML = displayItem;
    console.log(displayItem);
});
