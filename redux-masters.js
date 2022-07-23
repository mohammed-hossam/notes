import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from 'redux';
// https://stevekinney.github.io/redux-fundamentals/combine-reducers
//* ANCHOR compose
//function 3dya 5ales mos3da zy 7agat Lodash w ramda
/* const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeLouderAndBoldAndRepeatThreeTimes = (string) =>
  embolden(repeatThreeTimes(makeLouder(string)));

const makeLouderAndBoldAndRepeatThreeTimes = redux.compose(
  embolden,
  repeatThreeTimes,
  makeLouder
); */

//* ANCHOR actions
/* const ADD = "ADD";
const add = (number) => ({ type: ADD, payload: number });

el actoins nfso hwa el object { type: ADD, payload: number }, enma el function nfsha esmha action creator, w bst5dmha fe 3ml el action 3shan ykon reusable w lw 8yrto fe 7eta 2ro7 m8yr fel function bs fysm3 fe kolo
*/

//* ANCHOR reducer
/* const reducer = (state = initialState, action) => {
     if (action.type === ADD) {
       return { value: state.value + action.payload };
     }
   
     return state;
   }; 
   
lw 3nde nested object:
const x= {
     title:'blabla,
     content:'hgjhgkjh'
     data:{
          fname:'moh',
          lname:'hos',
          location:{
               city:'cairo'
          }
     }
}
 return {  ...state, 
          data: {...x.data,
          location: {city: action.payload }
     }
     }

   */

//* ANCHOR createStore
//return four functions
// 1) dispatch
// 2) subscribe
// 3) getState
// 4) replaceReducer

//take three arguments:
// 1) reducer
// 2) initialState (Optional)
// 3) enhancer (Optional)

/*  const store = redux.createStore(reducer);
lazm ykon feh reducer el 2wal wyt pass ka parameter 3shan tsht8l, lw msh kda hyde error


store.dispatch(increment()); dispatch hya ele htpass el action ll reducer 3shan y3dl felstate

bindActionCreators:(mogrd fn mos3da bdl m3od 2ktb dispatch kol mara)
const actions = bindActionCreators( { increment,add} , store.dispatch );

actions.increment();


also equivilant to :
const dispatchIncrement = compose(store.dispatch, increment);
const dispatchAdd = compose(store.dispatch, add);
or
const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) =>
  compose(store.dispatch, fn)
);
*/

//* ANCHOR replaceReducer
// deh mn esmha mogrd bt3ml replace ll reducer, 8alban btost5dm lma 23ml code splitting, b7es lma 2gy 27ml 7aga gdeda mt7mltsh fel2wal 2st5dmha fe ene 2bdl el reducer ele mwgoda b reducer gdeda feha el 7agat el gdeda ele m7tgha m3 el sf7a ele et7mlt gdeda

//* ANCHOR subscribe
//This method takes a function dictates what should happen whenever the state in the store is updated.

/* const subscriber = () => console.log('Subscriber!' store.getState().value);
const unsubscribe = store.subscribe(subscriber); */

//* ANCHOR enhancers and middlewars
//el enhacers deh lw 3ayz 2 change the overall implementaton of the store (like redux devtools, where it has the ability to load the state in the devtools, export the state, dispatch actions, undo , redo)
//enma el middlewares tost5dm lma 2kon 3yz 23ml 7aga m3 el actions, y3ny msln lma y7sl el action dah 23ml async req w b3d kda call el action kda y3ny.

//* ANCHOR hooks
//useSelector is the replacment for mapStateToProps (memoize by default)
//useDispatch is the replacment for mapDispatchToProps (memoize by default)

//* ANCHOR connect
//mezt connect en el component bta3y moomkn 23mlo test bshola 3shan moomkn 2d5lo 2y data ka mock w ysht8l 3ady, 3la 3ks el hooks mrbota bwgood el state, fa m7taga 3shan 23mlha test 2geb el state wana b3ml test

//connect bt3ml memoize by default , wbt compare lw el state heya heya msh bt3mlha pass.
//reselect est5dmha 3shan lw 3aml expensive things fl mapStateToProps, my3odsh y7sha kol mara 3shan ygeb el state.
//immer 3shan tshl mwdo3 el immutability


//* ANCHOR redux-toolkit
//the slice tieup things like reducers, actions, actionCreators

//it hooks into the devtools for us automatically

// configrestore: it will apply some middlewares automatically for us:
// 1) checks if u accidentally utating the state somewhere and yels at u about it.
// 2) redux thunk
