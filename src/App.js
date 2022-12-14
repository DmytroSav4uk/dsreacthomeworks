import Simpson from "./Characters/Simpson";
import "./App.css";
import Characters from "./Characters/Rickmorty";

function App() {
    return (
        <div className='main'>
            <div className='simpsons'>
                <Simpson name={'Bart'} pic={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
                <Simpson name={'Homer'} pic={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
                <Simpson name={'Marge'} pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
                <Simpson name={'Lisa'} pic={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
                <Simpson name={'Maggie'} pic={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
            </div>
                <Characters/>
         </div>
            )}



export default App;
