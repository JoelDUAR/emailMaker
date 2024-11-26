import styles from './ListEmails.module.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const ListEmails = () => {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.post(
            "http://100.71.78.183:2337/server/functions/getAllEmails",
            {
              headers: {
                "X-Parse-Application-Id": "000",
                "X-Parse-REST-API-Key": "Yzhl06W5O7Vhf8iwlYBQCxs6hY8Fs2PQewNGjsl0",
                "X-Parse-Session-Token": "r:9574ec5dd2af901492ae3ebb36eb42ee",
              },
          },
        );

        console.log(response);
        setEmails(response.data.result || []);
      } catch (err) {
        console.error("Error fetching emails:", err);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div>
      <h1>Listar Emails</h1>
      <p>Bienvenido a la sección de listar emails.</p>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {emails.length > 0 ? (
        <ul>
          {emails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron emails o están cargando...</p>
      )}
    </div>
  );
};

export default ListEmails;