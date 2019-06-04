console.clear();
const INCREMENT = 'INCREMENT';
const increment= () => ({
  type: INCREMENT  
});
const DECREMENT = 'DECREMENT';
const decrement = () => ({
  type: DECREMENT  
})
const reducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT: 
      return state + 1;    
    case DECREMENT:
      return state - 1;
      default :
        return state;
  }
}
const store = Redux.createStore(reducer);

//Iniciando com React
const {Provider, connect} = ReactRedux ; // High Order Components

const IncrementApp = ({store}) => {
  return (
    <div>
      <button class="btn btn-primary"
        onClick = {(e) => {
          console.log('-');
          store.dispatch(decrement())
        }}> - </button>
      <span class="alert alert-primary" role="alert">
        {` ${store.getState()} `}
      </span>
      <button class="btn btn-primary" 
        onClick = {(e) => {
          console.log('+');
          store.dispatch(increment())
        }}> + </button>
    </div>      
  )
};



const ourRender = () => {
  ReactDOM.render(
    <IncrementApp store={store}/>,
    document.getElementById('App')
  );  
}

store.subscribe(ourRender);

ourRender();