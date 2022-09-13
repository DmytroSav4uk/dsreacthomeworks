import Simpson from "./simpsons/simpson";
import  "./App.css";
import family from "./simpsons/family"


function App() {
    return (
        <button onClick={family}>click to see Simpson family</button>
    );
}

export default App;
// <div className='wrap'>
//     <Simpson name={'Bart'} pic={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
//     <Simpson name={'Homer'} pic={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
//     <Simpson name={'Marge'} pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
//     <Simpson name={'Lisa'} pic={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
//     <Simpson name={'Maggie'} pic={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
// </div>