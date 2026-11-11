
import ContactCard from "./ContactCard";

function ContactList({ contacts, searchTerm }) {

  const filteredContacts = contacts.filter((contact) => {

    const name = contact.fullName.toLowerCase();

    const company = (contact.company || "").toLowerCase();

    const search = searchTerm.trim().toLowerCase();

    return (
      name.includes(search) ||
      company.includes(search)
    );

  });

  return (
    <section className="contact-list-section">

      <div className="list-heading">
        <div>
          <span className="section-tag">YOUR NETWORK</span>
          <h2>My Contacts</h2>
        </div>

        <span className="contact-count">
          {contacts.length} {contacts.length === 1 ? "Contact" : "Contacts"}
        </span>
      </div>

      {filteredContacts.length > 0 ? (

        <div className="contact-grid">

          {filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))}

        </div>

      ) : (

        <div className="empty-state">
          <div className="empty-icon">♡</div>

          <h3>
            {contacts.length === 0
              ? "No contacts yet"
              : "No matching contacts"}
          </h3>

          <p>
            {contacts.length === 0
              ? "Add your first contact using the form above."
              : "Try searching with another name or company."}
          </p>
        </div>

      )}

    </section>
  );
}

export default ContactList;
