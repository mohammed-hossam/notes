//* basics:
//el file ele esmo servverWorks el ebyege m3 react files dah byost5dm 3shan lw hn3ml el app bt3na progressive app

//package.lock.json dah 3shan y5le en lw 7ad hynzl el app ele 3mleno fe 7eta tnya 8er el computer bt3na y3ml lock ll versions el liberaries ele mst5dmnha w tkon hya hya dyman

//cleanUp fnc btsht8l fe 7gtan:
//2wel 7aga lma ykon el component hytshal btro7 heya sh8ala 2bl ma dah y7sl
//tany 7aga lma useEffect yt3mlha rerender (msh initial render) btsht8l 2abl ma use effect tsht8l

// el key fe react by7tago 3shan y3rf y3ml render m3 el virtual dom w kda

// custom Hooks always make use of at least one primitve hook(like:useState or useEffect)

//i can use mangment state out of the component as a persist for the state when the component unmount(like context used in the coffeshop-nextApp)

//*lifecyle
//creation:
//constructor
//getDerivedStateFromProps(props,state)
//render()
//render child components
//componentDidMount()

//changes happend:
//getDerivedStateFromProps(props,state)
//shouldComponentUpdate(nextProps,nextState)
//render()
//update child components =>here every child component goes into the cycle (note:React.memo for hooks) (note:PureComponents instead of shouldComponentUpdate)
//getSnapShotBeforeUpdate(prevProps,prevState)
//componentDidUpdate()

// The componentDidUpdate method is called after the render method of the component is done executing. That means that it will be called after all children's render methods have finished.
//23tqd useEffect kda brdo lw htsht8l ka didmount?!

//* redux:
//actions=>useState(setState)
//reducers=>state itself

//react-redux heya ele btdene fkrt el provider wel connect ele heya zy fkrt createContexnt w useContext fe react enma redux nfsha heya ele btdene fkrt el store wl reducers w actions w kda y3ny
//npm i redux react-redux
//!important note el actions lma 2wdeha ll react components ele 3yz 2st3mlha feha 2st5dmha w heya gaya mn el props y3y props.7aga enma msh btt2ry lw7dha kda

//mapStateToProps bt3ml render el 2wal 2bl el component nfso may3ml w dah mntqy 3shan tdelo el props ele m7tgha mn el state

//*auth:(el kalam ele ktbo hna dah msh 2ked tar2ben moomkn tkon btsht8l 3ltol )
//afdl ter2a tar2eb 3mltha 2bl kda heya ele fe mwq3 netflix 3shan mst5dm el local storage m3 onAuthStateChanged ,3shan onAuthStateChanged btshof eza kan fe signin wala la2 w btab3 el mwdo3 lw 3ml singout, bs deh bttf3l m3 kol mara 2d5ol feha fa hwa kan mostfed bl local storage b7es eno lma el user y3ml sign in 2wel mara 2sgl fl local storage w lw 3ml sign out 2ms7o mn el localstorage fl user myfdlsh y5osh mn tany kol mara yd5ol 3l website lw 3ml signin abl kda w m3mlsh singout.

//*npm:(dynamic data into npm)
// npm_config_<flagname>
// بس في حاجة مهمة هنا وهي أن كل نظام تشغيل له syntax خاص به
// في الويندوز هيكون علامة % قبل وبعد المتغير زي كدة
// %npm_config_myflag%
// وفي لينكس هيكون علامة $ قبل المتغير زي كدة
// $npm_config_myflag
// وهيتم استخدامه بالشكل ده
// --<flagname>=<flagvalue></flagvalue>

//*routes in react-router-dom:
//lw 3nde dynamic route zy kda product/id wel id dah bykon 2rqam msln 78687687 lazm s3tha 2ktb fl route kda <Route path="/product/:id" children={<product />}></Route> or <Route path="/product/:id"  component{product}/>
//bs lw 3nde fe shkl query string zy kda /product?name='laptop232423' s3tha msh lazm 2ktbo fl route bktbo bs fl Link

//lw 3ayz 2de el (history,location,match) objects ele byde react-router-dom l component ana msh katbo fl routes. bdl m3ml props drilling w kda moomkn 2st5dm withRouter().
//withRouter dah bykon HOC y3ny component bya5od component ka parameter w byrg3 modefied component.

//*this.setState
//this.setState btsht8l Async w lw 3yz 2nfz 7aga b3d matsht8l 3ltol zy then kda y3ny m3 el promises hd5l el 7aga deh fe function bta3t el second parameter bt3tha
//lw 3ayz 27ot gwaha 7aga feha el state nfsha(msln this.state+1) s3tha m7tag 27sn ene 2st3ml function gwaha msh direct

//* data from children to parent
//lw 3ayz 23ml 7aga msh one way data flow w tro7 mn el hildren ll parent, b3ml function thandle ele 3yzo fel parent w 2wdeha ll children ka prop, b7es ene 23mlha call fl children component w ttnfz fl parent 3ady, fa kda moomkn 2deha parameter gaay mn el children component ray7 ll parent.

// https://github.com/FrontendMasters/pure-react-state-management
//* setState patterns
// 1) dont use state for derivations of props, instead derive computed properties directly from the props themselfs.(fullname example)
// 2) dont useState for things u are not going to render

//* Persisting State & useRef(in class vs in hooks)
//lw 3mlt setTimeOut consolelog el counter kol 3 second fe componentDidUpdate, w dost increase counter kaza mara wara b3d bl mouse kteer mara w7da, s3tha el consolelog htgeb 25er qema ll counter nfs 3dd marat el dosat ele dostha, 3shan fe kol mara el settimeout bthook 3ala nfs el state object, enma lw 3mlt nfs el fkra bs 6tat el settmeout fe useEffect, s3tha ele hy7sl en el cnslelog hygeb el counter mo5tlf msh bnfs 25er qema ll state, 3shan s3tha el settimeout 3mlt hook 3ala el state bta3t kol mara el useEffect etnfzt feha ele heya kant 3mlha feha heya kaman hook ll state bta3t kol render. lw 3ayz 27tfz bstate between el renders fl hooks moomkn 2st5dm el useRef

//*  why we use thunk and cant make api calls in the action creators?
// 1) action creators must return plian js objects with a type property.( lw est5dmna async function dah msh hy7sl 3shan btrg3 promise)
// 2) by the time out action gets to the reducer, we wont have fetched our data.
