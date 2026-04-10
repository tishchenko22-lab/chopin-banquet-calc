function preloadChopinBanquetMenu() {
    const menu = [
        { dish: 'Borscht', description: 'Traditional beet soup', price: 5.00 },
        { dish: 'Pierogi', description: 'Dumplings filled with cheese and potatoes', price: 8.00 },
        { dish: 'Golumpki', description: 'Stuffed cabbage rolls', price: 10.00 },
        { dish: 'Sernik', description: 'Polish cheesecake', price: 6.00 }
    ];
    return menu;
}

// Export function for use in other modules
export { preloadChopinBanquetMenu };