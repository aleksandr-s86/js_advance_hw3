/*Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).*/


document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const reviewText = document.getElementById('reviewText').value;

    // Получаем отзывы из LocalStorage или создаем новый объект
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

    // Добавляем отзыв
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(reviewText);

    // Сохраняем обновленный объект в LocalStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Очищаем поля ввода
    document.getElementById('productName').value = '';
    document.getElementById('reviewText').value = '';
    alert('Отзыв добавлен!');
});