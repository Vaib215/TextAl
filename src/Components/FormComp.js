import React, { useState } from 'react';
import Buttons from './Buttons';
import { element } from 'prop-types';
export default function FormComp() {
  const [prompt, setPrompt] = useState('');
  const sendPrompt = (t) => {
    setTimeout(() => {
      setPrompt('');
      document.querySelector('#mess').classList.add('invisible');
    }, 4000);
    setPrompt(t);
    document.querySelector('#mess').classList.remove('invisible');
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  document.title = "TextAl | Home"

  const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h2>Enter Text to Alter:</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            placeholder="Paste or type the text you want to alter here..."
            rows="8"
          ></textarea>
          <Buttons sendPrompt={sendPrompt} text={text} setText={setText} />
          <div id="mess" className="invisible">
            <div
              className="alert alert-success fade show py-1"
              style={{ width: 'fit-content', height: '2em' }}
            >
              {prompt}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>About your text:</h3>
        <p>
          Your text has {text.split(/\s+/).filter(element => { return element.length !== 0 }).length} words and {text.split("").filter(element => element !== ' ').length + text.split(/\s+/).filter(element => { return element.length !== 0 }).length - (text.length === 0 ? 0 : 1)}{' '}
          characters.
          <br /> Average reading time: {0.008 * text.split(/\s+/).filter(element => { return element.length !== 0 }).length} minutes
        </p>
        <h6>Text Preview:</h6>
        <p>
          {text.length > 0
            ? text
            : 'Type/Paste something in the text box above to preview it here...'}
        </p>
      </div>
    </>
  );
}
