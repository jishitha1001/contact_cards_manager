
import { useState } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

import "./App.css";

function App() {

  const [contacts, setContacts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  function addContact(newContact) {
    setContacts((previousContacts) => [
      ...previousContacts,
      newContact
    ]);
  }

  return (
    <div className="app">

      <header className="app-header">

        <div className="brand">
          <span className="brand-icon">C</span>
          <span>Contactly.</span>
        </div>

        <span className="header-label">
          CONTACT MANAGEMENT
        </span>

      </header>

      <main>

        <section className="hero-section">

          <div className="hero-content">

            <span className="section-tag">
              STAY CONNECTED
            </span>

            <h1>
              Every connection
              <br />
              <span>matters.</span>
            </h1>

            <p>
              A simple and organized space to manage
              your professional network and keep your
              important connections close.
            </p>

          </div>

          <div className="hero-decoration">
            <div className="decoration-circle">C</div>
            <span>CONNECT · ORGANIZE · GROW</span>
          </div>

        </section>

        <ContactForm onAddContact={addContact} />

        <section className="contacts-section">

          <div className="search-container">

            <span className="search-icon">⌕</span>

            <input
              type="search"
              className="search-input"
              placeholder="Search by name or company..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              aria-label="Search contacts by name or company"
            />

            {searchTerm && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                Clear
              </button>
            )}

          </div>

          <ContactList
            contacts={contacts}
            searchTerm={searchTerm}
          />

        </section>

      </main>

      <footer className="app-footer">

        <div className="footer-brand">
          Contactly.
        </div>

        <p>
          Stay connected. Stay organized.
        </p>

        <p className="copyright">
          © 2026 Contactly. Built with React.
        </p>

      </footer>

    </div>
  );
}

export default App;
