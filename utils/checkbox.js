// checkbox.js
import SourceBooks from "../enums/common/SourceBooks.js";

export function getSelectedBooks() {
    const selectedBooks = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        selectedBooks.push(checkbox.value);
    });
    return selectedBooks;
}

export function setupCheckboxListeners() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            console.clear();
            const selectedBooks = getSelectedBooks();
            console.log('Selected books:', selectedBooks);
        });
    });
}
