document.getElementById('sendButton').addEventListener('click', async function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return; // Do nothing if input is empty

    // Append user message
    const chatBox = document.getElementById('chatBox');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById('userInput').value = '';

    try {
        // Fetch response from the Stack Exchange API
        const response = await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${encodeURIComponent(userInput)}&site=stackoverflow`);
        
        if (!response.ok) {
            throw new Error('API error or no results found');
        }

        const data = await response.json();
        
        if (data.items.length === 0) {
            throw new Error('No questions found');
        }

        // Get up to 3 questions
        const questions = data.items.slice(0, 3);

        // Display each question
        questions.forEach(question => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            botMessage.innerHTML = `
                <strong><a href="${question.link}" target="_blank">${question.title}</a></strong><br>
                ${question.is_answered ? 'Answered' : 'Unanswered'}<br>
                Score: ${question.score}
            `;
            chatBox.appendChild(botMessage);
        });
    } catch (error) {
        console.error('Error fetching response:', error);
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = 'Sorry, I couldn’t fetch a response at the moment.';
        chatBox.appendChild(botMessage);
    } finally {
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
});
