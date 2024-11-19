import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [contents, setContents] = useState([]);

  const fetchData = async () => {
    try {
      const username = process.env.REACT_APP_AUTH_USERNAME;
      const password = process.env.REACT_APP_AUTH_PASSWORD;
      const apiUrl = process.env.REACT_APP_API_URL;


      const auth = btoa(`${username}:${password}`);

      const response = await axios.get(`${apiUrl}/o/headless-delivery/v1.0/content-structures/33619/structured-contents`, {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Accept': 'application/json',
        },
      });

      if (response.data && response.data.items) {
        const sortedContents = response.data.items.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
        setContents(sortedContents);
      } else {
        console.error('API response does not contain items:', response.data);
      }
    } catch (error) {
      console.error('Error while searching for API:', error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="container">
      <h1>Liferay Content</h1>
      <div className="cards-grid">
        {contents && contents.length > 0 ? (
          contents.map((item, index) => {
            const imageField = item.contentFields.find((field) => field.dataType === 'image');
            const titleField = item.contentFields.find((field) => field.name === 'Headline');
            const contentField = item.contentFields.find((field) => field.name === 'Content');

            return (
              <div className="card" key={index}>
                {imageField && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}${imageField.contentFieldValue.image.contentUrl}`}
                    alt={imageField.label}
                    className="card-image"
                  />
                )}
                <h2>{titleField ? stripHtmlTags(titleField.contentFieldValue.data) : 'No headline'}</h2>
                <p>
                  {contentField ? truncateText(stripHtmlTags(contentField.contentFieldValue.data), 30) : 'No content'}
                </p>
                <headless-component></headless-component>
              </div>
            );
          })
        ) : (
          <p>No Content Available.</p>
        )}
      </div>
    </div>
  );
};

export default App;
