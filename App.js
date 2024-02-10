/**
 *
 * <div id="parent">
 * <div id="child">
 * <h1 Ima h1 tag</h1>
 * <h2> Ima h2 tag</h2>
 * </div> 
 * <div id="child2">
 * <h1 Ima h1 tag</h1>
 * <h2> Ima h2 tag</h2>
 * </div> 
 *
 *  ReactElement(object)=>HTML(Browser Understandable)
 */
const parent = React.createElement(
    'div',{ id: "parent" },
   [
     React.createElement( 'div', { id: "child" },[
      React.createElement('h1',{},"Ima h1 tag"),
      React.createElement("h2",{},"I am an h2 tag"),
      ])],
        [ React.createElement('div', { id: "child2" },[
            React.createElement('h1', {}, "Ima h1 tag"),
            React.createElement("h2",{},"I am an h2 tag"),
            ])]
  );
  //JSX =>because it exists in the React package
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(parent);
  
// const heading=React.createElement('h1',{id:"heading", xyz:"abc"},
// "Hello World from React");
// console.log(heading);

