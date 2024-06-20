// 
import React from 'react';
import './Task.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='card'>
      <p className='micro'>Microphone: {listening ? 'on' : 'off'}</p>
      <div className='button'>
      <button onClick={SpeechRecognition.startListening} >Start</button>
      <button onClick={SpeechRecognition.stopListening} >Stop</button>
      <button onClick={resetTranscript} >Reset</button>
      <p>{transcript}</p>
      </div>
     
    </div>
  );
};
export default Dictaphone;