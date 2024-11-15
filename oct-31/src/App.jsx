import MyButton from './MyButton'
import MyList from './MyList'


function App() {
  return(
    <>
      <h1>welcome to app</h1>
      <p>what will happen when press?</p>
      <MyButton isSpecial={false} text="button 1" />
      <MyButton isSpecial={true} text="other button"/>
      <MyList />
    </>
  ); 
}

export default App