const heading = React.createElement("h1", {id:"heading"}, "Hello from React");



const parent = React.createElement
("div", {id: "parent"}, 
    [
        React.createElement("div", {id:"child1"},
        [
            React.createElement("h1", {},"H1 from Child1"),
            React.createElement("h2", {},"h2 from Child 1")
        ]
    ),
    React.createElement("div", {id:"child2"},
    [
        React.createElement("h1", {}, "h1 from child2"),
        React.createElement("h2", {}, "h2 from child2")
    ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
