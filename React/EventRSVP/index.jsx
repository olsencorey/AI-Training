const { useState } = React;

export function EventRSVPForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attendees: 1,
    dietary: "",
    guests: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => 
      ({
        ...prev, [name]: type === "checkbox" ? checked : value
      })
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="name">Name (required)</label>
          <input 
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email (required)</label>
          <input 
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="attendees">Number of Attendees (min 1)</label>
          <input 
            id="attendees"
            name="attendees"
            type="number"
            min="1"
            required
            value={form.attendees}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="dietary">Dietary Preferences (optional)</label>
          <input 
            id="dietary"
            name="dietary"
            type="text"
            value={form.dietary}
            onChange={handleChange}
          />
        </div>
        <div class="checkbox-group">
          <input 
            id="guests"
            name="guests"
            type="checkbox"
            checked={form.guests}
            onChange={handleChange}
          />
          <label htmlFor="guests" style={{marginBotton: 0}}>Bringing additional guests?</label>
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="confirmation">
          <div>RSVP Submitted!</div>
          <div>Name: {form.name}</div>
          <div>
            Email: <a href={`mailto:${form.email}`}>{form.email}</a>
          </div>
          <div>Number of attendees: {form.attendees}</div>
          <div>Dietary preferences: {form.dietary ? form.dietary : 'None'}</div>
          <div>Bringing additional guests: {form.guests ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div> 
  );
}
