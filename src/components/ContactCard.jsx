
function ContactCard({ contact }) {
  const initials = contact.fullName
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="contact-card">

      <div className="card-top">
        <div className="avatar">
          <span>{initials}</span>

          {contact.avatar && (
            <img
              src={contact.avatar}
              alt={contact.fullName}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>

        <div className="contact-heading">
          <h3>{contact.fullName}</h3>

          <p className="job-title">
            {contact.jobTitle || "Professional Contact"}
          </p>
        </div>
      </div>

      <div className="card-divider"></div>

      <div className="contact-info">

        <p>
          <span className="info-label">COMPANY</span>
          {contact.company || "Not specified"}
        </p>

        <p>
          <span className="info-label">EMAIL</span>
          <a href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>

        <p>
          <span className="info-label">PHONE</span>
          {contact.phone || "Not specified"}
        </p>

      </div>

      <p className="contact-bio">
        {contact.bio || "No biography added."}
      </p>

    </article>
  );
}

export default ContactCard;
