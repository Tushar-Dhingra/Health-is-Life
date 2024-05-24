document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category-select');
    const searchInput = document.getElementById('search-input');
    const foodTableBody = document.getElementById('food-table').querySelector('tbody');

    function fetchFoodItems() {
        const selectedCategory = categorySelect.value;
        const searchText = searchInput.value;

        const url = new URL('/api/food_items', window.location.origin);
        const params = new URLSearchParams();
        if (selectedCategory !== 'all') params.append('category', selectedCategory);
        if (searchText) params.append('search', searchText);
        url.search = params.toString();

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayFoodItems(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayFoodItems(items) {
        foodTableBody.innerHTML = '';
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>${item.category}</td><td>${item.calories}</td>`;
            foodTableBody.appendChild(row);
        });
    }

    categorySelect.addEventListener('change', fetchFoodItems);
    searchInput.addEventListener('input', fetchFoodItems);

    // Initial fetch of all food items
    fetchFoodItems();
});