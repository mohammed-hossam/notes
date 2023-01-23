//next btsm7ly 27dd eh el pages ele yt3mlha ssg w eh ele yt3mlha ssr

//next btshof el 7agat ele 3mlha import fl page w mst5dmha bs fl server w msh btgbha m3aha fl client side 5ales

//mn el 2fdal lw 3nde 7aga fl props ele gaya mn el ssr bshkl 3am w kbera 27wlha 27sn json w heya gaya w b3d kda lma 2st3mlha fl component 27wlha tany object
/*exmaple:
 return { props: { chat: chat, messages: JSON.stringify(msgs) }//kbeer };
for using JSON.parse(messages) */

// any non user generated content should be static generated at build time

//ay 7aga byt3mlha render 3ala el server btkon el natega bt3tha mogrd html w css lakn lw 3ndy handlers bl js wl kalam dah fa dah lsa by7sl 3ala el browser 3shan 2adr 2sln 27ot el handlers deh. w kaman 3shan kda lw 3nde 2y 7aga feha est5dam ll dom apis zy document,window,navigator,gps el mfrod en ehya tde error lma el page yt3mlha server side rendering, lakn next.js btdek tro2 l7al el mshakl deh zy el dynamic import. moomkn my7slsh mshakl lw est5dmt 7agat el dom brdo 3shan next bt3l pollyfill 3ala kalam course frontend masters.
//* _app vs document:
// file _2app dah bykon 3aml return ll page ele ana feha now yan kant w dah bstfed mno eno kda yo3tbr by3br 3n kol el pages bta3t el project ele 3nde f moomkn 23ml leh wrap b2y 7aga 3ayzha tkon fe kol el pages zy style mo3yn msln 2w footer yzhr fe kol el pages kda y3ny.
//If your app is running and you added a custom App, you'll need to restart the development server. Only required if pages/_app.js didn't exist before.
//el mfrod 27ot feh 2y 7aga 3yha global, zy msln el css globals ele 3yzo el mfrod yt7t feh.
//Note: global css files cant be imported from files other than _app.

//ay 8aga b3mha fl _app btkon ll body tag, enma el document 27ot feha 7agat 5asa fl html tag ka total zy html tag wl head
//A custom Document can update the <html> and <body> tags used to render a Page. This file is only rendered on the server, so event handlers like onClick cannot be used in _document.(so every time i change it i need to restart the server 3shan ysm3 el edit ele 3mlto)
//The <Head /> component used in _document is not the same as next/head. The <Head /> component used here should only be used for any <head> code that is common for all pages. For all other cases, such as <title> tags, we recommend using next/head in your pages or components.
//React components outside of <Main /> will not be initialized by the browser. Do not add application logic here or custom CSS (like styled-jsx). If you need shared components in all your pages (like a menu or a toolbar), read Layouts instead(_app).

//*Link:
/* Link bta3 next by5lene ene 23rf 2nel ben el safa7at zy el spa bdon ma y3ml refresh w request w kda zy el anchor tag 3shan kda msh bst5dm el anchor tag. 
bs moomkn 2st5dmo lw 3ayz msln 23ml style ll Link bs gwa el Link brdo 3shan mfqdsh el meza .
hwa ele 7asl en kda kda Link byd5l under the hood 2sna2 el build w kda anchor tag m3ah, fa hwa bysm7ly ene 2st5dmo bshrot b7es yfhm ene 3ayz 28yr feh 7aga lma yd5lo m3ah 2sna2 el build
el shrot ene m7otsh feh href brdo 27otha fl Link 3ady zy kda
      <Link href={/events}>
        <a className={classes.btn}>go to event</a>
      </Link>
        */

//* Data fetching and pre-rendering:

//*ssg (static site generation)
/* next bt3ml by default ssg(ll 7agat ele mfehash fetching data): y3ny fe 5lal 3mlyt el build bytl3 html w m3ah kol el static files (zy el images y3ny w kda ) w moomkn ykon feh js bro 3ady ysht8l 3ala el clinet side. kol dah lkol page ana 2ayl l next t3mlha sg, w b3d kda files el html deh btkon hya ele byt3mlha deployment w btkon gahz 3ltol 2wel ma 7ad yd5ol 3l sf7a mn 8er my7sl 7aga 2blha 3l server w moomkn yt5zn 3la cdn b7es en moomkn kda nas twslo 2shl w 2sr3.
w b3d kda bykml ka react spa 3ady w dah ma yosma bl hydration
 note: mohma gedan hena w heya en wana sh8al 3ala el dev mode (npm run dev) 7ata lw fl build by3ml ssg wana sh8al dev mode by3ml ssr y3ny by3ml build ll html file per request msh bykon gahz zy ma by3ml build ssg
 note: el ssg by7tag brdo server lma y3ml build 3l computer 3ndk 3shan kda lazm ykon node mwgod 
 w 3shan kda swa2 ssg 2w ssr el etnan bytsmo server side*/

//*getstaticprops
/*getstaticprops: deh 3n ter2 ene 2m3lha export kda ba2ol l next en el sf7a deh 3yzha ssg w tb3an lazm ttktb fl page ele 3yzha bs
 2y 7aga bttktb feha btsht8l bs 3ala el server(node) w next msh btb3tha 5ales ll client side 2ssasn fl bundel el 25era 
 
 zy m2olna en next 2sln by default bt3ml ssg ,fa kol ele hy7sl lma 23ml export ll funtion(getstaticprops) k2ny b2kd 3ala next enha t3ml ele ht3mlo ka ssg ll page 3ady bs enha kaman tsh8l el function deh 2wel 7aga 3l server 2bl 7ata el components el tnya ele fl sf7a wen el kalam ele feha msh 3yzo 3l clientside*/

//When a page with getStaticProps is pre-rendered at build time, in addition to the page HTML file, Next.js generates a JSON file holding the result of running getStaticProps.

//This JSON file will be used in client-side routing through next/link or next/router. When you navigate to a page that’s pre-rendered using getStaticProps, Next.js fetches this JSON file (pre-computed at build time) and uses it as the props for the page component. This means that client-side page transitions will not call getStaticProps as only the exported JSON is used.

//When using Incremental Static Generation, getStaticProps will be executed in the background to generate the JSON needed for client-side navigation. You may see this in the form of multiple requests being made for the same page, however, this is intended and has no impact on end-user performance.

//* ISR (incremental site regeneration)
/* el ISR: fkrto hwa en lw 3nde sf7a 3yzha ssg w mst3ml feha getstaticprops b7es 2geb beha data 2sna2 el build time w b3d kda 3ady tkml next tkml generate w kda ll sf7a w tb2a ghza w2rf3ha b3d kda 3l server. delw2ty kda fe moshkla w heya en el data deh 8alban htkon mot8yraa, fa fe tre2a 3mlaha el next b7es 2a2olha en t5le balha en el data deh htb2a mot8yra w ene 3yzha t3ml fetch ll data deh kol ftra mo3yna 3n tre2 property esmha revalidate w bta5od 3dd seconds mo3yna.
ele by7sl en kol 7aga btb2a 3dya k2ne mst3ml getstaticprops 3ady w 2wel ma el client ytlob el sf7a bttb3t el ghza bs lw b3t b3d 10 swany s3tha httb3t el sf7a bl data el gdeda w lw 2ql mn el 10 ele m7ddhom s3tha htb3t el 2dema brdo l2nha htkon lsa m3mltsh update.  */

//* Dynamic paths with ssg (getstaticpath and fallback):
/*na5od balna mn 7aga en lw 3nde sf7a dynamic esmha kda msln: [id.js], el sf7a deh htkon bydefault ssr msh ssg l2n mfesh 2sln leha esm sabt next t2dr tt3aml m3ah 3shan t3rf t3mlha ssg.
w lw 3yz 25leha ssg s3tha 2st3ml getstaticprops 3ady bs lazm 2st3ml kaman m3aha getstaticpath  w ela htdene error ,w dah mntqee 3shn 2deha eh el paths bzbt ele tt3aml m3aha ka ssg 3shan kda kda msh h3rf 23ml ssg l pages msh m3rofa 2sln fa lazm 27dd esmha lw heya dynamic.next ht3ml regeneration lkol path h7to fl params bta3t getstaticpath 
importnnt video in max-course: 097 _getStaticPaths_ & Link Prefetching_ Behind The Scenes   */
/* fallback property:true fe getstaticpath deh heya ele b5le beha el pages ele msh 3ayz 23mlha pregenerated fl build time yt3aml m3aha 3l server justintime lma el client ydos 3ala link sf7a msh 3mlha pregenerated.
note: mohma gedan hena w heya en lw el sf7a el client mwslsh leha 3n tre2 link la2 enma ka url ktbo w msh 3mlha pregenerated bta5od wa2t w msh bystna 3la el data lma twsl w b3d kda yb3t el page la2 byb3t el page w s3tha lw component el page deh mst5dm feha el data ele lsa mgtsh hyde error fal7al s3tha moomkn t3ml el component eno y3ml return loading state lw mfesh el data deh w lsa mgtsh, wlma tege el data next by3ml update(rerender tar2ebn) ll component dah zy react w kda, 2w moomkn 7al tany enk t3ml el fallback: blocking b7es eno yb3t el sf7a lma tkon el page bt3tna et3mlha fully generated on the server 5alas  */

// getstaticpath will only run during build in production, it will not be called during runtime. You can validate code written inside getStaticPaths is removed from the client-side bundle with this tool(https://next-code-elimination.vercel.app/).

//The paths key determines which paths will be pre-rendered.

//fallback:true (pages do exist (but not render at build time before))
/* The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
In the background, Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.
When complete, the browser receives the JSON for the generated path. This will be used to automatically render the page with the required props. From the user’s perspective, the page will be swapped from the fallback page to the full page.
At the same time, Next.js adds this path to the list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, like other pages pre-rendered at build time.

this means that Next first quickly returns a dummy pre-render with empty data that had been created at build time.
In this, you are expected to tell the user that the page is loading.
You must handle that case, or else it could lead to exceptions being thrown due to missing properties.

fallback: true (pages that don't exist)?
If the user accesses a page that does not exist like /post/i-dont-exist, Next.js will try to render it just like any other page, because it checks that it is not in .next/server/pages thinks that it just hasn't been rendered before.
This is unlike fallback: false, where Next.js never generates new pages at runtime, and just returns a 404 direction.
In this case, your code will notice that the page does not exist when getStaticProps queries the database, and then you tell Next.js that this is a 404 with notFound: true as mentioned at: How to return a 404 Not Found page and HTTP status when an invalid parameter of a dynamic route is passed in Next.js? so Next.js renders a 404 page and caches nothing. 

y3ny lw el sf7a msh mwgoda lazm 23ml handling ll mwdo3 fl getStaticProps, b7es ene 2rg3 sf7a mo3yna 2w 2rg3 404 2w ma shabah

more at he topic of fallbacks at : https://stackoverflow.com/questions/67787456/what-is-the-difference-between-fallback-false-vs-true-vs-blocking-of-getstaticpa
*/

//*ssr (server side rendering)
/*  el ssr ele by7sl feh en el build bytm per request 3ala el server msh bykon gahz 2bl kda y3ny lma el client yd5ol 3ala el site by7sl pre render 3ala el server w b3d kda sf7t el html w 7agtha lma tghz ttb3t w b3d kda b2a bykml k2no react spa 3ady.
w tb3an kda bykon bte2 3n el sstatic generation 3shan hena msh bn2dr n3ml 2y cach 3ala cdn

kaman el ssr feh 7aga zyada 3n el ssg: w hwa eno bydene access 3ala el request object b7es ene moomkn msln fl authentication 23wz cookies 2w kda, enma fl ssg la2 moomkn bs mogrd 25od esm 7eta mn el url bl useRouter 2w context lkn mfesh t3amol mobashr 23rf 23mlo fl ssg m3 el request object.
  */

//* csr ()
// Client-side data fetching is useful when your page doesn't require SEO indexing, when you don't need to pre-render your data, or when the content of your pages needs to update frequently. Unlike the server-side rendering APIs, you can use client-side data fetching at the component level. If done at the page level, the data is fetched at runtime, and the content of the page is updated as the data changes. When used at the component level, the data is fetched at the time of the component mount, and the content of the component is updated as the data changes. It's important to note that using client-side data fetching can affect the performance of your application and the load speed of your pages. This is because the data fetching is done at the time of the component or pages mount, and the data is not cached.

//first immedialty show the page without data. parts of the page can be prerendered using static generation, you can show loading state for missing data.
//thn fetch the data on the client sde and display it when its ready.

//*pages
//1) page needs to be a React component
//2) component needs o b exported by default

//*apis
//1) file needs to be a function
//2) function needs to be exported by default
//3) every function should be its own file

//* important notes:
// in development getstaticprops and getStaticPaths always run.
// lazm 2smy el 7agat ele gaya mn el .env.local b NEXT_PUBLIC lw 3ayz 2st5dmha fl clientside.
//getServerSideProps r8m enha btrender el page per request 3la 3ks  getstaticprops ele bt3ml kda fl build time, ela en getServerSideProps bt3ml cache ll pages ele 3mltlha generate 2bl kda fa mt3mlsh generate leha tany per request, ela en el cashe page deh brdo btege mn el server.
//* important topics:
// 1) different rendering technics (ssg,isr,ssr)
// 2) img optimization
// 3) _app vs _document
// 4) routing system

//frontend master https://production-grade-nextjs.vercel.app/lesson/06-preview-content

// ⁡⁣⁢⁢​‌‍‌𝗻͟𝗲͟𝘅͟𝘁͟𝟭͟𝟯 𝗻͟𝗼͟𝘁͟𝗲͟𝘀⁡

//frontend master https://intro-nextjs-v2-instructions.vercel.app/

//⁡⁢⁢⁢notes⁡
// ⁢if client component will be render in a server component, server components in general cant pass on non-serializable props to client component(like functions and components and just functions and also date object, only like htm,css,json)

//⁡⁢⁢⁢layout⁡
// el Layouts moomkn tkon nested, bs n5le balna enha msh byt3mlha rerender lma 23ml navigation 2w ma shabah ,3shan next 3aml optimization w byshof enha sabta ka layout, fa leh y3mlha rerender, bs lw 3ayz 23ml dyman ll layout rerender e 7aga esmha template bdel l layout, zy el layout bzbt bs bt3ml rerender dyman. wel template deh moomkn 2st3mlha msln lw de data dyman gdeda 3yz 23mlha fetch w m7tag rerender 2w lw 3nde transtions fl layout fas3tha 3shan t7sl el transtions lazm y7sl rerender.

//kman moomkn 2fdl layout l kol mgmo3a mn el routes bl syntax dah=> {admin}/home

//⁡⁢⁢⁢ssr vs server components⁡
//na5od balna en el server component mo5tlf 3n el ssr, la2n el server component bysht8l bs 3al ael server w bykon stream msh bytb3t mara w7da, w dah mbny 3ala rl rfc bta3 react 2sln gahz, enma el ssr dah ele 3rfeno 3ady wele by3ml hydrationw el kalam dah w dah moomkn y7sl bs ll client components.

//⁡⁢⁢⁢navigation link⁡
/* A route transition is initiated using or calling router.push().
The router updates the URL in the browser’s address bar.
The router avoids unnecessary work by re-using segments that haven't changed (e.g. shared layouts) from the client-side cache. This is also referred to as partial rendering.
If the conditions of soft navigation are met, the router fetches the new segment from the cache rather than the server. If not, the router performs a hard navigation and fetches the Server Component payload from the server.
If created, loading UI is shown from the server while the payload is being fetched.
The router uses the cached or fresh payload to render the new segments on the client. */

//⁡⁢⁢⁢loading ⁡⁢⁢⁢and error⁡
// el loading file bykon loading ll pages w kda, enma lw 3ayz 23m loading state l component mo3yn w hwa byt3mlo render 3ala el server, moomkn 23mlo wrap b suspense w27tlo fallback. and same for error page and Errorboundery component

//frontend master https://fullstack-v2-instructions.vercel.app/

// - el middlewares btsht8l fel edge runtime, w dah ele hwa y3ny fel cdn nodes, bs na5od balna en dah runtime mo5tlf shiwa 3n el node el 3ady, b7es en fe restrictions shwia w hwa en 28lb el code myb2ash dynamic bl ykon static. w lazm 3shan mwdo3 el edge dah ysht8l, nkon raf3en el project 3ala 7aga btd3m kda 2sln w 7alyan el emwgodeen vercel w netlify.(el cdn 2sln fl 3ady el tabe3e eno byd3m bs ene 27ot 3leh 7agat static zy el HTML images wl kalam dah enma mynf3sh 23ml 3leh execution l code node w dah el gded fe fekrt el edge functions)

// - fl server components lw 3aml await ll data el sf7a msh httb3t 8er lma el data tege, 3shan msh ht3ml return 2sln 3shan 3aml await getdata(), bs moomkn m3mlsh await w s3tha tro7 3mla return 3ltol w ttb3t wl data lsa mgtsh , w aro7 ana 3aml spinner ( moomkn 2shoof el 7eta deh 2fdl fl course 2alha 2zay blzabt fullstack-app-next day2 part3)

// - lw 3ayz 2st5dm suspense 3shan tzhrly loading state l7ad ma el data bta3t el component tege well component b3dha ytb3t w yege ll client side, lazm 25od baly en dah 3shan y7sl lazm 2kon b3ml fetch ll data bta3t le component gwa el component nfso, msh fl parent bta3oh msln, w dah 3shan suspense y2dr yrbot el component bl data bta3to.
// good indication where to get the data parent or component it self,⇒ lw 3nde 2ktr mn component fl parent w b3ml map 3lehom s3tha m7tag 2geb el data deh fl parent 3shan 23rf 23ml map, enma lw component wa7d self contained w gwah data s3tha 2geb el data gwa el component nfso 3shan 23rf 23ml suspense bshola.

// - mn dmn el 7agat ele 7elwa fl server components enk moomkn t3m call ll database 3ltol w tgeb el data direct mnha, bdl mt3ml call ll API w b3d kda el API  deh tro7 eya tklm el database w t3od tshof lw fe moshka fl network well call ll API 5ad wa2t 2d eh el kalam dah. mn el 25r kda enta wfrt layer kamla wbltaly el wa2t b2aa 2sr3.

// - if we have data on a page, where this data needs to be updated on client side , then we have to make that data get fetched client side (to have the ability to mutate using state and setstat, or to refresh the page which also need the component to be cliet side). until now we can get around this to avoid client component by using something like on demand revalidation([https://beta.nextjs.org/docs/data-fetching/revalidating#using-on-demand-revalidation](https://beta.nextjs.org/docs/data-fetching/revalidating#using-on-demand-revalidation))
