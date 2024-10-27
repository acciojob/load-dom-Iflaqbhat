document.body.innerHTML = '';

        // Listen for the DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', function() {
            // Create a new paragraph element
            const paragraph = document.createElement("p");
            // Set the text content of the paragraph
            paragraph.textContent = "DOM load success";
            // Append the paragraph to the body
            document.body.appendChild(paragraph);
        });