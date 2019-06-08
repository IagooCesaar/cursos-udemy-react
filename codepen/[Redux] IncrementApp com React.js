console.clear();

const INCREMENT = 'INCREMENT';
const increment= () => ({
  type: INCREMENT  
});

const DECREMENT = 'DECREMENT';
const decrement = () => ({
  type: DECREMENT  
});

/* state e action são parâmetro padrões do Redux para o reducer */
const reducer = (state = 0, action) => {
  /* Deverá sempre retornar um state default */ 	
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
          store.dispatch(decrement()) //Despacha a ação decrement para o reducer
        }}> - </button>
		
      <span class="alert alert-primary" role="alert">
        {` ${store.getState()} `}
      </span>
	  
      <button class="btn btn-primary" 
        onClick = {(e) => {
          console.log('+');
          store.dispatch(increment()) //Despacha a ação increment para o reducer
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