import React, {useState} from 'react';
import './style.scss'
const App = () => {
    const [text, setText] = useState('');
    const [isShow, setShow] = useState(false);
    console.log(isShow)

    return (
        <div className="header">
            React
            <input
                onChange={(e) => {
             setText(e.target.value)
            }}
                value={text}
            />
            <button onClick={() => setShow(true) }>Show Text</button>
            <button onClick={() => setText('') }>Delete Text</button>
            {
                isShow &&
                    <div>
                        {text}
                    </div>
            }
        </div>
    );
};

export default App;