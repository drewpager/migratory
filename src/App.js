import React, { useRef, useEffect } from 'react';
import './App.css';
import lottie from 'lottie-web';

export const App = () => {
  const contain = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./loading.json')
    })
  }, [])
  return (
    <div className="App">
      <h1>Siege Media</h1>
      <div className="contain" ref={contain} />
    </div>
  );
}