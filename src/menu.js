import './style.css'

export default function openMenuTab() {
    const content = document.getElementById('content')
    content.classList.remove('content')
    content.classList.add('menu-content')
    //Main 
    const mainSection = document.getElementById('mainSection')
    mainSection.innerHTML = ''
    mainSection.classList.remove('main')
    mainSection.classList.add('menu-main')

    // Parent container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Array of burger data
    const burgers = [
        {
            name: 'Classic Cheeseburger',
            description: 'Juicy beef patty topped with melted cheese and fresh veggies.',
            price: '3.99$',
        },
        {
            name: 'BBQ Bacon Burger',
            description: 'Smoky BBQ sauce, crispy bacon, and tangy pickles on a grilled patty.',
            price: '4.99$',
        },
        {
            name: 'Spicy Jalapeno Burger',
            description: 'Fiery jalapenos, pepper jack cheese, and zesty sauce for a kick of heat.',
            price: '5.99$',
        },
        {
            name: 'Veggie Burger',
            description: 'A plant-based delight with a medley of fresh veggies and vegan mayo.',
            price: '4.99$',
        },
        {
            name: 'Swiss Burger',
            description: 'Sautéed mushrooms, Swiss cheese, and savory sauce for a rich flavor.',
            price: '6.99$',
        },
        {
            name: 'Smash Burger',
            description: 'Grilled pineapple, teriyaki glaze, and a hint of sweetness on a juicy patty.',
            price: '7.99$',
        },
    ];

    // Create menu cards dynamically
    burgers.forEach((burger, index) => {
        // Menu card
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        // Card left
        const cardLeft = document.createElement('div');
        cardLeft.classList.add('card-left');

        // Burger name
        const burgerName = document.createElement('div');
        burgerName.classList.add('burger-name');
        burgerName.textContent = burger.name;

        // Burger description
        const burgerDescription = document.createElement('div');
        burgerDescription.classList.add('burger-description');
        burgerDescription.textContent = burger.description;

        // Burger price
        const burgerPrice = document.createElement('div');
        burgerPrice.classList.add('burger-price');
        burgerPrice.textContent = burger.price;

        // Append elements to card left
        cardLeft.appendChild(burgerName);
        cardLeft.appendChild(burgerDescription);
        cardLeft.appendChild(burgerPrice);

        // Card right
        const cardRight = document.createElement('div');
        cardRight.id = `burger${index + 1}`;
        cardRight.classList.add('card-right');

        // Append card left and card right to menu card
        menuCard.appendChild(cardLeft);
        menuCard.appendChild(cardRight);

        // Append menu card to menu container
        menuContainer.appendChild(menuCard);
    });

    // Append menu container to the document body or a target element
    mainSection.appendChild(menuContainer)

} 
