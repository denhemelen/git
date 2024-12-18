 // Масив для збереження покупок
 let shoppingItems = [];

 // Функція для оновлення списку покупок
 function updateShoppingList() {
   const listContainer = document.getElementById('list-items');
   const itemCount = document.getElementById('item-count');
   const totalPrice = document.getElementById('total-price');

   // Очищення списку перед оновленням
   listContainer.innerHTML = '';

   // Підрахунок загальної кількості покупок та вартості
   let count = shoppingItems.length;
   let total = shoppingItems.reduce((sum, item) => sum + item.price, 0);

   itemCount.textContent = count;
   totalPrice.textContent = total;

   // Додавання нових елементів
   shoppingItems.forEach((item, index) => {
     const itemDiv = document.createElement('div');
     itemDiv.classList.add('bg-brown-100', 'p-4', 'rounded-lg', 'mb-4', 'flex', 'justify-between', 'items-center');
     itemDiv.innerHTML = `
       <div>
         <h4 class="text-lg text-brown-800 font-bold">${item.name}</h4>
         <p class="text-brown-600">${item.price} грн</p>
       </div>
       <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
       <button onclick="removeItem(${index})" class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700">Видалити</button>
     `;
     listContainer.appendChild(itemDiv);
   });
 }

 // Функція для видалення елемента
 function removeItem(index) {
   shoppingItems.splice(index, 1);
   updateShoppingList();
 }

 // Обробка форми
 document.getElementById('shopping-form').addEventListener('submit', function(event) {
   event.preventDefault();
   const itemName = document.getElementById('item-name').value;
   const itemPrice = parseFloat(document.getElementById('item-price').value);
   const itemImage = document.getElementById('item-image').value;

   shoppingItems.push({ name: itemName, price: itemPrice, image: itemImage });
   updateShoppingList();

   // Очищення полів форми
   document.getElementById('item-name').value = '';
   document.getElementById('item-price').value = '';
 });