// Store cards in localStorage
let cards = JSON.parse(localStorage.getItem('cards')) || [];

// DOM Elements
const cardContainer = document.getElementById('cardContainer');
const addCardBtn = document.getElementById('addCardBtn');
const cardModal = new bootstrap.Modal(document.getElementById('cardModal'));
const cardForm = document.getElementById('cardForm');
const modalTitle = document.getElementById('modalTitle');

// Event Listeners
addCardBtn.addEventListener('click', () => {
    cardForm.reset();
    document.getElementById('cardId').value = '';
    modalTitle.textContent = 'Add New Card';
    cardModal.show();
});

cardForm.addEventListener('submit', handleFormSubmit);

// Initialize
renderCards();

// Functions
function handleFormSubmit(e) {
    e.preventDefault();
    
    const cardId = document.getElementById('cardId').value;
    const card = {
        id: cardId || Date.now().toString(),
        imageUrl: document.getElementById('imageUrl').value,
        title: document.getElementById('title').value,
        description: document.getElementById('description').value
    };

    if (cardId) {
        // Edit existing card
        const index = cards.findIndex(c => c.id === cardId);
        cards[index] = card;
    } else {
        // Add new card
        cards.push(card);
    }

    localStorage.setItem('cards', JSON.stringify(cards));
    renderCards();
    cardModal.hide();
}

// Add these with your other DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Add these with your other Event Listeners
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Add this new function
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderCards(cards);
        return;
    }

    const filteredCards = cards.filter(card => 
        card.title.toLowerCase().includes(searchTerm) ||
        card.description.toLowerCase().includes(searchTerm)
    );

    renderCards(filteredCards);
}

// Modify the renderCards function to accept a parameter
function renderCards(cardsToRender = cards) {
    cardContainer.innerHTML = cardsToRender.map(card => `
        <div class="col-md-4">
            <div class="card-flip">
                <div class="card-flip-inner">
                    <div class="card-front">
                        <img src="${card.imageUrl}" class="card-img" alt="${card.title}">
                        <h3>${card.title}</h3>
                    </div>
                    <div class="card-back">
                        <h4>${card.title}</h4>
                        <p>${card.description}</p>
                        <div class="mt-3">
                            <button class="btn btn-primary me-2" onclick="editCard('${card.id}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteCard('${card.id}')">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function editCard(id) {
    const card = cards.find(c => c.id === id);
    if (card) {
        document.getElementById('cardId').value = card.id;
        document.getElementById('imageUrl').value = card.imageUrl;
        document.getElementById('title').value = card.title;
        document.getElementById('description').value = card.description;
        modalTitle.textContent = 'Edit Card';
        cardModal.show();
    }
}

function deleteCard(id) {
    if (confirm('Are you sure you want to delete this card?')) {
        cards = cards.filter(card => card.id !== id);
        localStorage.setItem('cards', JSON.stringify(cards));
        renderCards();
    }
}