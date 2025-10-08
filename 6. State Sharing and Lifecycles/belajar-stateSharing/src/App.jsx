import './App.css'
import { useState } from 'react'

// ===== Komponen untuk Lifting State Up =====
function Panel({ title, children, isActive, onShow }) {
  return (
    <section style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Tampilkan</button>
      )}
    </section>
  )
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div style={{ margin: '20px' }}>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        Almaty, formerly known as Alma-Ata and Verniy, is the largest city in Kazakhstan,
        with a population of 1,854,656 (as of 2009). It served as the country's capital
        from 1929 to 1997.
      </Panel>
      <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        The name "Almaty" is derived from the Kazakh word for "apple" (алма, alma),
        and is often translated as "full of apples" or "rich with apples". The region
        surrounding Almaty is known for its apple orchards, and it is considered the
        ancestral home of the apple.
      </Panel>
    </div>
  )
}

// ===== Komponen untuk Preserve State =====
const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
]

function Chat({ contact }) {
  const [text, setText] = useState('')

  return (
    <section style={{ margin: '20px' }}>
      <h3>Chat dengan {contact.name}</h3>
      <textarea
        value={text}
        placeholder={`Chat dengan ${contact.name}`}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          minHeight: '100px',
          padding: '10px',
          fontSize: '14px'
        }}
      />
      <p style={{ fontSize: '12px', color: '#666' }}>
        Email: {contact.email}
      </p>
    </section>
  )
}

function Messenger() {
  const [to, setTo] = useState(contacts[0])

  return (
    <div style={{ margin: '20px' }}>
      <h2>Messenger - Preserve State dengan Key</h2>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setTo(contacts[0])}
          style={{
            padding: '8px 16px',
            backgroundColor: to.id === 0 ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Alice
        </button>
        <button
          onClick={() => setTo(contacts[1])}
          style={{
            padding: '8px 16px',
            backgroundColor: to.id === 1 ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Bob
        </button>
      </nav>
      {/* Dengan key, React akan reset state saat berpindah contact */}
      <Chat key={to.id} contact={to} />
    </div>
  )
}

// ===== Komponen Utama =====
function App() {
  const [currentView, setCurrentView] = useState(null)

  const buttonStyle = (isActive) => ({
    padding: '10px 20px',
    backgroundColor: isActive ? '#007bff' : '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  })

  const backButtonStyle = {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '15px'
  }

  return (
    <div>
      {/* Navigation Buttons */}
      <div style={{ margin: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setCurrentView('liftingStateUp')}
          style={buttonStyle(currentView === 'liftingStateUp')}
        >
          Implementasi Lifting State Up
        </button>
        <button
          onClick={() => setCurrentView('preserve')}
          style={buttonStyle(currentView === 'preserve')}
        >
          Implementasi Preserve
        </button>
      </div>

      {/* Back Button */}
      {currentView && (
        <div style={{ margin: '20px' }}>
          <button onClick={() => setCurrentView(null)} style={backButtonStyle}>
            ← Back
          </button>
        </div>
      )}

      {/* Content Views */}
      {currentView === 'liftingStateUp' && <Accordion />}
      {currentView === 'preserve' && <Messenger />}
    </div>
  )
}

export default App
