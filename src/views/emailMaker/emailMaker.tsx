import styles from './emailMaker.module.css';
import axios from 'axios';
import React, { useRef } from 'react';
import EmailEditor, { EditorRef } from 'react-email-editor';
import FormData from '../../components/formData/formData';


const EmailMaker = () => {

    // Referencia al editor
  const emailEditorRef = useRef<EditorRef>(null);

  // Exportar HTML generado
  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    // Exportar el diseño como HTML
    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log('Diseño exportado (JSON):', design);
      console.log('HTML exportado:', html);

      const url = 'https://84433d40-2337.brs.devtunnels.ms/verifyUser';

      axios.post(url, html);

      // Aquí podrías enviar el HTML al backend o guardarlo localmente
      alert('HTML exportado con éxito. Revisa la consola para más detalles.');
    });
  };

  
    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>

      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <button
          onClick={exportHtml}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Exportar HTML
        </button>
      </div>
      <div style={{ flex: 1, height: '96vh', width: '96vw', margin: '.5vh auto'}}>
        <EmailEditor ref={emailEditorRef} />

        <FormData/>
      </div>
    </div>
    );
       
  };
  
  export default EmailMaker;