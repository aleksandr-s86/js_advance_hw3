document.addEventListener('DOMContentLoaded', function() {
    const reviewList = document.getElementById('reviewList');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

    for (const product in reviews) {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h2>${product}</h2>`;
        
        const reviewContainer = document.createElement('div');
        reviews[product].forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.innerHTML = `
                <p>${review}</p>
                <button onclick="deleteReview('${product}', ${index})">Удалить</button>
            `;
            reviewContainer.appendChild(reviewDiv);
        });
        productDiv.appendChild(reviewContainer);
        reviewList.appendChild(productDiv);
    }
});

function deleteReview(product, index) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    reviews[product].splice(index, 1);

    if (reviews[product].length === 0) {
        delete reviews[product];
    }

    localStorage.setItem('reviews', JSON.stringify(reviews));
    location.reload(); // Обновляем страницу
}