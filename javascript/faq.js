document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'question'
    const questions = document.querySelectorAll('.question');
    const activeClass = 'question-active'; // Store the class name for clarity

    // Loop through each selected element
    questions.forEach(question => {
        // Add a click event listener to each 'question' element
        question.addEventListener('click', () => {

            // 1. Check if the clicked element is already active
            const wasActive = question.classList.contains(activeClass);

            // 2. Close ALL other questions
            questions.forEach(q => {
                // Remove the active class from every question in the list
                q.classList.remove(activeClass);
            });

            // 3. Open the clicked question ONLY if it was NOT already active
            // This allows clicking an expanded item to close it.
            if (!wasActive) {
                question.classList.add(activeClass);
            }
        });
    });
});