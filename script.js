// ========================================
// Відкрити форму
// ========================================

function openModal() {
    document.getElementById("callModal").style.display = "block";
}

// ========================================
// Закрити форму
// ========================================

function closeModal() {
    document.getElementById("callModal").style.display = "none";
}

// ========================================
// Закриття при кліку на фон
// ========================================

window.onclick = function (event) {
    const modal = document.getElementById("callModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};