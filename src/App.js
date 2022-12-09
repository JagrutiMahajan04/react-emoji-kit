import React, { useState } from 'react';
import './App.css';
import  Footer from './components/Footer/Footer'


function App() {

  const [emoji, setEmoji] = useState("🎄")
  const [emojiColor,setEmojiColor] = useState("white")
  const [emojiSize,setEmojiSize] = useState(150);
  const [emojiDeg, setEmojiDeg] = useState(0);

  return (
    <div className='container'>
      <div className='app-title-container'>
        <h1 className='app-title'>🎅CHRISTMAS EMOJI KIT🎁</h1>
      </div>


      <div className='emoji-editor-container'>
        <div>
          <div className='main-emoji-container' style={{ backgroundColor: emojiColor,transform: `rotate(${emojiDeg*3.6}deg)`}}>
            <div className='main-emoji' style={{fontSize:`${emojiSize*2}px`}}>
              {emoji}
            </div>
          </div>

          <div className='emoji-container'>
            <div className='emoji-item' onClick={() => { setEmoji('🎄') }}>🎄</div>
            <div className='emoji-item' onClick={() => { setEmoji('⛄') }}>⛄</div>
            <div className='emoji-item' onClick={() => { setEmoji('🎅') }}>🎅</div>
            <div className='emoji-item' onClick={() => { setEmoji('🎁') }}>🎁</div>
            <div className='emoji-item' onClick={() => { setEmoji('💒') }}>💒</div>
            <div className='emoji-item' onClick={() => { setEmoji('🍰') }}>🍰</div>
          </div>
        </div>

        <div>
          <div className='colors-container'>
            <h4>Bg-Color:</h4>
            <div className='color-item bg-red' onClick={() => { setEmojiColor("red") }}></div>
            <div className='color-item bg-blue' onClick={() => { setEmojiColor("blue") }}></div>
            <div className='color-item bg-yellow' onClick={() => { setEmojiColor("yellow") }}></div>
            <div className='color-item bg-pink' onClick={() => { setEmojiColor("pink") }}></div>
          </div>

          <div className='size-container'>
            <h4>Size:</h4>
            <input type= "range" className='size-slider' onChange={(e)=>{setEmojiSize(e.target.value)}}></input> 
          </div>

          <div className='size-container'>
            <h4>Rotate:</h4>
            <input type= "range" className='size-slider' onChange={(e)=>{setEmojiDeg(e.target.value)}}></input> 
          </div>

        </div>

      </div>

      <div>
      <Footer/>
     </div>
     
    </div>
    
  );
}

export default App;
