import './App.css'

function App() {
  return (
    <div>
      {/* Heading - Judul dengan berbagai level */}
      <h1>Ini adalah Heading 1</h1>
      <h2>Ini adalah Heading 2</h2>
      <h3>Ini adalah Heading 3</h3>
      <h4>Ini adalah Heading 4</h4>
      <h5>Ini adalah Heading 5</h5>
      <h6>Ini adalah Heading 6</h6>

      {/* Paragraf */}
      <p>Ini adalah paragraf biasa dengan teks normal.</p>
      
      {/* Teks dengan formatting */}
      <p>
        Ini adalah <strong>teks tebal (strong)</strong> menggunakan strong tag.
      </p>
      <p>
        Ini adalah <b>teks tebal (b)</b> menggunakan b tag.
      </p>
      <p>
        Ini adalah <em>teks miring (em)</em> menggunakan em tag.
      </p>
      <p>
        Ini adalah <i>teks miring (i)</i> menggunakan i tag.
      </p>
      <p>
        Ini adalah <u>teks bergaris bawah (u)</u>.
      </p>
      <p>
        Ini adalah <mark>teks yang di-highlight (mark)</mark>.
      </p>
      <p>
        Ini adalah <small>teks kecil (small)</small>.
      </p>
      <p>
        Ini adalah <del>teks yang dicoret (del)</del>.
      </p>
      <p>
        Ini adalah <ins>teks yang ditambahkan (ins)</ins>.
      </p>
      <p>
        Ini adalah teks dengan <sub>subscript</sub> dan <sup>superscript</sup>.
      </p>

      {/* Blockquote - Kutipan */}
      <blockquote>
        "Ini adalah kutipan atau quote menggunakan blockquote tag."
      </blockquote>

      {/* Code - Kode */}
      <p>
        Ini adalah <code>kode inline</code> di dalam paragraf.
      </p>
      <pre>
        <code>
          {`// Ini adalah blok kode
function contoh() {
  return "Hello World";
}`}
        </code>
      </pre>

      {/* List - Daftar */}
      <h3>bullet point (ul):</h3>
      <ul>
        <li>Item pertama</li>
        <li>Item kedua</li>
        <li>Item ketiga</li>
      </ul>

      <h3>Numbered List (ol):</h3>
      <ol>
        <li>Langkah pertama</li>
        <li>Langkah kedua</li>
        <li>Langkah ketiga</li>
      </ol>

      {/* Horizontal Rule - Garis pemisah */}
      <hr />

      {/* Span dengan styling inline */}
      <p>
        Ini adalah teks dengan <span style={{ color: 'red' }}>warna merah</span> dan <span style={{ backgroundColor: 'yellow' }}>background kuning</span>.
      </p>

      {/* Abbreviation - Singkatan */}
      <p>
        <abbr title="HyperText Markup Language">HTML</abbr> adalah bahasa markup.
      </p>
      <p>
        <abbr title="Cascading Style Sheets">CSS</abbr> digunakan untuk styling.
      </p>
      <p>
        <abbr title="JavaScript">JS</abbr> adalah bahasa pemrograman.
      </p>

      {/* Link */}
      <p>
        Ini adalah <a href="https://react.dev" target="_blank" rel="noopener noreferrer">link ke React Documentation</a>.
      </p>
    </div>
  )
}

export default App
