import React from 'react';

export default function Buttons(props) {
  const handleUpClick = (e) => {
    props.setText(props.text.toUpperCase());
    props.sendPrompt('Converted text to uppercase');
  };
  const handleLoClick = (e) => {
    props.setText(props.text.toLowerCase());
    props.sendPrompt('Converted text to lowercase');
  };
  const handleCtClick = (e) => {
    props.setText('');
    props.sendPrompt('Cleared text');
  };
  const handleCcClick = (e) => {
    let cam = '';
    props.sendPrompt('Converted to capitalize case');
    if (props.text === '') {
      props.setText('');
      return;
    }
    props.text.split(' ').forEach((k) => {
      cam += k.charAt(0).toUpperCase() + k.slice(1).toLowerCase() + ' ';
    });
    props.setText(cam);
  };
  const handleCopy = () => {
    let text = document.querySelector('textarea');
    navigator.clipboard.writeText(text.value);
    props.sendPrompt('Text copied to your clipboard');
  };
  const handleExtraSpaces = () => {
    let newText = props.text.split(/[ ]+/);
    props.setText(newText.join(' '));
    props.sendPrompt('Removed extra spaces from text');
  };

  return (
    <div>
      <button className={`btn btn-light btn-outline-dark my-2`} onClick={handleUpClick}>
        Convert to UPPERCASE
      </button>
      <button
        className={`btn btn-light btn-outline-dark my-2 mx-2`}
        onClick={handleLoClick}
      >
        Convert to lowercase
      </button>
      <button className={`btn btn-light btn-outline-dark my-2`} onClick={handleCcClick}>
        Convert To Capitalize Case
      </button>
      <button
        className={`btn btn-light btn-outline-dark my-2 mx-2`}
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <button className={`btn btn-light btn-outline-dark my-2`} onClick={handleCopy}>
        Copy Text
      </button>
      <button
        className={`btn btn-light btn-outline-dark my-2 mx-2`}
        onClick={handleCtClick}
      >
        Clear Text
      </button>
      <br />
    </div>
  );
}
