// checkbox.js
import SourceBooks from "../enums/common/SourceBooks.js";

export function getSelectedBooks() {
    const selectedBooks = [SourceBooks.CORE];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxes.forEach((checkbox) => {
        const bookValue = checkbox.value;
        
        // Map the string value to the SourceBook object
        for (let key in SourceBooks) {
            if (SourceBooks[key] === bookValue) {
                selectedBooks.push(SourceBooks[key]);
            }
        }
    });

    return selectedBooks;
}


export function setupCheckboxListeners() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            console.clear();
            const selectedBooks = getSelectedBooks();
            console.log('Selected books:', selectedBooks);

            // Check the type of the first item to confirm if it's an object
            if (selectedBooks.length > 0) {
                console.log('Type of first selected book:', typeof selectedBooks[0]);
                console.log('First selected book is:', selectedBooks[0]);
            }
        });
    });
}

