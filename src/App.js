import React from 'react';
import './index.scss';



function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="App">
      <button onClick ={() => setOpen(true)} className="open-modal-btn">View content</button>

            {/*условие отображение элемента через класс анимации
            если открыт TRUE, то появляется класс "show", если FALSE, то пусто */}
            <div className={`overlay animated ${open ? 'show' : ''}`}>
              <div className="modal">

                {/*кнопка "закрыть"*/}
                <svg onClick ={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                  <title />
                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                {/*кнопка "закрыть"*/}

                <img src="https://media.giphy.com/media/DoIquD1MhDGMw/giphy.gif" />
                <h1>Be quiet, the cat is sleeping!</h1>
              </div>
            </div> 
    </div>
  );
}

export default App;
