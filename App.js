const parent= React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"heading"},"Hello World from React!!"),React.createElement("h2",{id:"heading2"},"I'm H2 Tag")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"heading"},"Hello World from React!!"),React.createElement("h2",{id:"heading2"},"I'm H2 Tag")]),]);




//const heading= React.createElement("h1",{id:"heading"},"Hello World from React!!");
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);