//* Notes:

//this.$el: the element that vue will mount (not sure)

// compiling: where vue will scan the template for elements, directives, expressions,events,bindings, then changing it into objects and render it into the document.
//vue will compile the template by taking elements as string and converting it into object, for example <h1 class='blue'><span>hello world</span></h1> convertedinto =>{tag:'h1',attributes:{class:blue},content:{[tag:'span',attributes:{},conent:'hello world']}}

//vue cli is a runtime build (without compiler) that make rendering our objects easy and automated. cli will use the render function to compile our template .

// components files gets exported automatic as an object that has every thing templte,script and css.

//*methods:
//methods are used to perform complex tasks.
//funtions inside methods object are proxied by vue.
//if we want to use this fucntions inside the vue instance,we have to use this keyword(just like data (this happens because of proxy, where without prxoy we have to use this.data.blabla(if we use arrow function that wont work)))
//functions are directly assiccable in the templte.

//* computed:
// whenever any data property updated, vue will rerender, and any method we used in the templete vue will recall it, exept for the events methods, we can use computed to solve this problem.
// vue cache the values of computed properties, and when a property in data change,vue watches and will check if any computed method use that data ChannelMergerNode, methods that use it will re called again.
//in computed methods we have always to return a value; because vue store the value that is returned.

//* watch:
// like computed, vue also watch if data used in method in watch has changed,but computed properties shoud not be async.

//* innerHtml:
//to put html (innerHtml) we use a directive called v-html='<p>welcome</p>'

//* $refs
//when we change somthing using them, they ar not reactive

//* v-modal modifiers:
// .number it will make the data to be a number, if it a string or whatever it will automatically convert to number.(good for input as input always gives string)
// .trim remove white spaces
// .lazy make changes only after the user get out focus of the input

//* v-if v-else-if v-else v-show

//by3mlo render ll component 3ala 7sb condition mo3yn lw msh mt7a22 hytshalo 5ales mn el document.
//lazm ykono warab3d
//v-show nfs el fkra bs bt3ml display:block ll element enma msh btshelo 5ales mn el docmuent zy v-if. also it doesnt work with template like v-if.

//v-show: better if element constatly appear/disappear on the page
//v-if: better if element rarely/occasionally appear/disappear on the page

//* v-for:

/* <li v-for='(element,index) in array' :key='blabla'>
{{element}} - {{index}}
</li> */

/* <li v-for='(element,key,index) in object' :key='blabla'>
{{key}}:{{value}} - index:{{index}}
</li> */

//* lifecycle:
// setup in the compostion api (first thing is called, and any thing in it at first is not known to any other options until it is called first) ( beacuse of that, beforecreate and created are not useful in the compostion api)
// before create (before intialize the instance,cant access data and methods)
// create (data and methods and all things in the instance gets intialized)
// before mount (before compiling the template )
// mount (after compiling the template and inserted into the document)
// before update (data gets updated but not applaied yet)
// update (data gets applaied)

// if we want to destroy a vue instance =>vu.unmount()
// before unmount (called before the instance is destroyed, our instance is still fully functional on the page)
// unmount (triggred when the instance is destroyed you want be able to access any thing in the instance like data,methods....)

//* components:

//Components are reusable instances with a name,Since components are reusable instances, they accept the same options as a root instance, such as data, computed, watch, methods, and lifecycle hooks.

//? to create global component:
/* 
let vueApp = Vue.createApp({});
vueApp.component('ComponentName',{
     template:`<h1>{{welcome}}</h1>`,
     data(){return msg:'welcome'}
})
vueApp.mount('#app')

Note: this is a global component, single file components(SFC) is not global but closed on itself, where it will be exported as an object
*/

//? to create local component:
/* 
https://v3.vuejs.org/guide/component-registration.html#local-registration
const ComponentA = {}
const ComponentB = {}

const app = Vue.createApp({
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
Note: Note that locally registered components are not also available in subcomponents to make them avalible:
import ComponentA from './ComponentA.vue'
export default {
     name: ComponentB
  components: {
    ComponentA
  }
  // ...
}
*/

//? The options passed to createApp are used to configure the root component. That component is used as the starting point for rendering when we mount the application.
/* 
const RootComponent = {
  options
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
*/

//? https://v3.vuejs.org/guide/instance.html#creating-an-application-instance
// Unlike most of the application methods, mount does not return the application. Instead it returns the root component instance.
// Although not strictly associated with the MVVM pattern (opens new window), Vue's design was partly inspired by it. As a convention, we often use the variable vm (short for ViewModel) to refer to a component instance.

//* webapck:

// sometimes we need to install loader and the liberary itself and sometimes we need to install the loader only and it comes with the library.

//1)sass loader =>to compile scss to css
//2)postCSS loader =>to compile css to object tree in js to use js to make adjustments like autoprefixer then compile again to css.
//3)CSS loader =>to add css into the final bundel.(webpack by default only read js files)
//4)style loader => to inject css in styles in the head section.
// or
//4)miniCssExtractPlugin.loader =>to make css files in a single seperate file instead of using style loader

//* emitting events:(equivilant to passing functions as props in react)

//to listin to  props changing from child to parent components

//* props:
//validator functions run before the instance is created; so it wil not have access to data ,methods.

//*slots (equal to props.children in react):

/* 
<form>
  <slot>
    this is a default if there is no slots passed from the parent component
  </slot>
</form>;
 */

//*vue core modules:
//vue has three core modules: the reactivity module, the compiler module, the renderer module

// the compiler module takes the template and compile it to render functions, this can happen on the browser at the run time but more often it happens when vue project is built so that the browser always recive the render functions

//the renderer module contains code for three different phases of rendering out a component:
//1) in the render phase the render function is called and returns a virtualdom node
//2) in the mount phase the module takes the virual dom node, and makes dom javascript calls to create a webpage
//3) in the patch phase the module takes the old virtual node and the new virtual node, then compares the two and updates only the partes of the page that have changed using dom javascript calls.

//*render functions:

//el template el mfrod el compiler module by7wlo l el render functions deh, w b3d kda el render functions heya ele btl3 el virtualdom nodes ele btkon js objects 3dya zy kda const vnode={tag:'div',children:[{test:'hello'}]}

//when the component changes the render function gets called again wich return another new nodes, then the old and new are compared.

/* 
el render function ele byktbha el developers mo5tlfa shwia 3n ele byt3lha el compiler, y3ny msln ele byt3lha el compiler module bta5od arguments 3ala 3ks ele bytkbah el developer ms bta5od 7aga 

So why does Vue recommend templates by default? There are a number of reasons:
Templates are closer to actual HTML. This makes it easier to reuse existing HTML snippets, apply accessibility best practices, style with CSS, and for designers to understand and modify.
Templates are easier to statically analyze due to their more deterministic syntax. This allows Vue's template compiler to apply many compile-time optimizations to improve the performance of the virtual DOM (which we will discuss below).

some optimizations that made by the compiler:
1) fe react bnst5dm useCallback 3shan mn3mlsh createtion l functoin mo3yna mn 2wel w gded m3 kol rerender w yt3mlha pass ll childrens msln lw m7tgha ka she2 gded w yt3ml rerender gded 3l fady, fe vue b2a el mwdo3 dah byt3ml automatic

2) el tabe3e lma nege nqarn fel virtualdom 3shan nshof eh el nodes ele 7slha update, motren n iterate 3ala kol el nodes el old wl new w nqarn bb3d 3shan nshof eh ele et8yr, w dah fe el apps el small 2w medium kwis ka performance bs lw el app kbeer 2wi el performance moomkn yt2sr shwia, fa vue by2ol fel render function lma tege tt3ml mn el compiler module el nodes ele moomkn tt8yr zy msln el nodes ele feha data zy kda( <p>{{msg}}</p>), b7es y3ml ll nodes deh bs tracking w myfdlsh yqarn kol el nodes tany mn el 2wal lma y7sl update. (3ala 3ks el react msh b3ml kda by3de 3ala kolo (mn kalam vue documenation))
 */

//fe ba3d el 7alat moomkn 2kon el template msh kafy lele 3ayz 23mlo, w s3tha moomkn 2st5dm el render functions 27sn 3shan tdene t7kom 2ktr, mn dmn el 2msla 3ala keda hwa lw 3nde slot (childrens) w 3ayz 2t7sm fel childrens deh ene 23ml feha 7agat kteer 2bl ma tt3rd.
// const Stack={
//   render(){
//     const slot =this.$slots.default
//       ? this.$slots.default()
//       :[]

//     return h('div',{class:'stack'},slot.map(child=>{
//       return h('div',{class:`mt-${this.$props.size}`},[
//         child
//       ])

//    }))
//   }
// }
{
  /* <Stack size="4">
 <div>hello</div>
 <Stack size="4">
   <div>hello</div>
    <div>hello</div>
 </Stack>
</Stack>

<div class="stack">
 <div class="mt-4">
   <div>hello</div>
 </div>
 <div class="mt-4">
   <div class="stack">
    <div class="mt-4">
      <div>hello</div>
    </div>
   </div>
 </div>
</div> */
}
