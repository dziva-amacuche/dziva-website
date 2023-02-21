import React from "react";
import styled from "styled-components";


function ContactMe() {
  return (
    <Contact>
      <div className="contact-container">
        <h1>Entre em contato</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Contact>
  );
}

const Contact = styled.div`
  height: 100vh;
  overflow: auto;

  background-color: #f8f8f8;

  .contact-container {
    margin: 0 8rem;
    h1 {
      text-align: center;
      font-size: 32px;
      margin-top: 4rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;

      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;

        label {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        input,
        textarea {
          font-size: 16px;
          padding: 0.5rem;
          border: none;
          border-radius: 5px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        textarea {
          resize: vertical;
          min-height: 8rem;
        }
      }

      button {
        background-color: #dc241f;
        color: white;
        font-size: 20px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 2rem;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #8b0a0a;
        }
      }
    }
  }
`;

export default ContactMe;
