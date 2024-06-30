import { useState } from 'react'
import './App.css'
import SignatureCanvas from 'react-signature-canvas'

function App() {
  const [sign, setsign] = useState(null);
  const [penColor, setPenColor] = useState('black');

  const handleClear = () => {
    sign.clear();
  };

  const handleSave = () => {
    const dataURL = sign.getTrimmedCanvas().toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png';
    link.click();
  };

  const handleColorChange = (event) => {
    setPenColor(event.target.value);
  };

  return (
    <>
      <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Sign Here</h2>
      <div className="card">
        <div className="input">
          <h4 style={{ marginBottom: '5px' }}>Choose color</h4>
          <input 
            type="color" 
            value={penColor} 
            onChange={handleColorChange} 
            style={{ width:'60px', height: '25px' }}
          />
        </div>
        
        <div className="sign" style={{ border: '2px solid black' }}>
          <SignatureCanvas
            penColor={penColor}
            canvasProps={{ width: 1000, height: 450, className: 'sigCanvas' }}
            ref={data => setsign(data)}
          />
        </div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  );
}

export default App;
