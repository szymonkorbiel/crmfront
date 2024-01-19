import React, { useState, useEffect } from 'react';
import instance from '../../externals/instance';
import '../../styles/EbokHome.css';

const Messages = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchMessagesList = async () => {
    try {
      const response = await instance.get('/messages/list');
      setMessagesList(response.data.messages.messages);
    } catch (error) {
      console.error('Error fetching messages list:', error);
    }
  };

  useEffect(() => {
    fetchMessagesList();
  }, []);

  const formatDateWithoutTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
  
    return formattedDate;
  };

  const handleDetailsClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div style={{ display: 'flex' }}>
      <h1 className='ebokh1'>Wiadomości</h1>
      <div>
<ul className='ebokul'>
  {Array.isArray(messagesList) && messagesList.length > 0 ? (
    <li className='ebokli' key="header">
      <table>
        <thead>
          <tr>
            <th className='ebokth' style={{ width: '10%' }}></th>
            <th className='ebokth' style={{ width: '50%' }}>Tytuł</th>
            <th className='ebokth' style={{ width: '20%' }}>Data</th>
            <th className='ebokth' style={{ width: '20%' }}></th>
          </tr>
        </thead>
      </table>
    </li>
  ) : null}
  {messagesList.map((message, index) => (
    <li className='ebokli' key={message.id}>
      <table>
        <tr>
          <td style={{ width: '10%' }}>
            <p style={{ color: "#0335a6" }}>{index + 1}&nbsp;</p>
          </td>
          <td style={{ width: '50%' }}>
            <p style={{ color: "gray" }}>{message.subject}</p>
          </td>
          <td style={{ width: '20%' }}>
            <p style={{ color: "#0335a6" }}>{formatDateWithoutTime(message.createdAt.date)}</p>
          </td>
          <td style={{ width: '20%', alignContent:"center" }}>
            <button className="ebokbutton" onClick={() => handleDetailsClick(message)}>Otwórz</button>
          </td>
        </tr>
      </table>
    </li>
  ))}
</ul>

      {selectedMessage && (
        <div style={{ flex: '1', borderLeft: '1px solid #ccc', paddingLeft: '20px', paddingTop:"5%" }}>
          <div style={{ borderBottom: "1px solid #ffb766" }}>
            <h2>Wybrana wiadomość</h2>
            <span style={{ color: "#0335a6", fontWeight: "bold" }}>Tytuł: <span style={{ color: "gray" }}>{selectedMessage.subject}</span></span>
            <p style={{ color: "#0335a6", fontWeight: "bold" }}>Odebrano: <span style={{ color: "gray" }}>{formatDateWithoutTime(selectedMessage.createdAt.date)}</span></p>
            <p style={{ color: "#0335a6", fontWeight: "bold" }}>Treść: <span style={{ color: "gray" }}>{selectedMessage.message}</span></p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Messages;
