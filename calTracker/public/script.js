const foodItems = [
    { name: 'Milk', category: 'dairy', calories: 42 },
    { name: 'Cheese', category: 'dairy', calories: 113 },
    { name: 'Apple', category: 'fruits', calories: 52 },
    { name: 'Banana', category: 'fruits', calories: 96 },
    { name: 'Carrot', category: 'vegetables', calories: 41 },
    { name: 'Broccoli', category: 'vegetables', calories: 55 },
    // Add more food items as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category-select');
    const searchInput = document.getElementById('search-input');
    const foodTableBody = document.getElementById('food-table').querySelector('tbody');

    function displayFoodItems(items) {
        foodTableBody.innerHTML = '';
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>${item.category}</td><td>${item.calories}</td>`;
            foodTableBody.appendChild(row);
        });
    }

    function filterFoodItems() {
        const selectedCategory = categorySelect.value;
        const searchText = searchInput.value.toLowerCase();
        
        const filteredItems = foodItems.filter(item => {
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchText);
            return matchesCategory && matchesSearch;
        });
        
        displayFoodItems(filteredItems);
    }

    categorySelect.addEventListener('change', filterFoodItems);
    searchInput.addEventListener('input', filterFoodItems);

    // Initial display of all food items
    displayFoodItems(foodItems);
});