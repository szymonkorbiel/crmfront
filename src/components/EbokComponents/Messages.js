// Importy
import React, { useState, useEffect } from 'react';

// Komponent Messages
const Messages = () => {
  // Stan dla listy wiadomości
  const [messagesList, setMessagesList] = useState([]);

  // Funkcja pobierająca listę wiadomości
  const fetchMessagesList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/public/messages/list');
      const data = await response.json();
      setMessagesList(data);
    } catch (error) {
      console.error('Error fetching messages list:', error);
    }
  };

  // Efekt pobierający listę wiadomości po zamontowaniu komponentu
  useEffect(() => {
    fetchMessagesList();
  }, []);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlenie listy wiadomości */}
      <h2>Messages List</h2>
      <ul>
        {messagesList.map((message) => (
          <li key={message.id}>
            <strong>{message.subject}</strong> - {message.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
