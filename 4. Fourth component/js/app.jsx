var LifecycleComponent = React.createClass({
    // my sample function in this exercise
    increment: function() {
        this.setState({
            count: this.state.count + 1
        })
    },

    // for my purposes - information about Lifecycle - general informations!!

    // 1. getDefaultProps - called once
    // before component is dendered
    // happens when our class is created!!
    getDefaultProps: function(){
        console.log("Default Props - but we don't need it in our componet, just for test. Important: it does not have any props but it is loaded default once before ")
    },

    // 2. getInitialState - called once
    // before component is dendered
    getInitialState: function(){
        console.log("Getting our initial state")
        return{
            count: 0
        }
    },

    // 3. componentWillMount - called once
    // before component is dendered
    // does not have access to DOM, but has access to props and the state
    componentWillMount: function(){
        console.log(this.state);
        console.log(this.props);
        console.log("Component is mounting")
    },

    // 4. render method - happended whenever our component changes
    render: function() {
        console.log("component is rendered");
        return (
            <button onClick={this.increment}>{this.state.count}</button>
        )
    },

    // 5. componentDidMount - only once
    // after componetn has rendered
    // has access to props, state and DOM
    componentDidMount: function(){
        console.log("Component has rendered");
        console.log(this.state);
        console.log(this.props);
        console.log(ReactDOM.findDOMNode(this));  // this -> keyword  this - this is our component , whole component
        this.interval = setInterval(this.increment, 1000);
    },

    // 6. componentWillUnmount - only once
    // after componetn has rendered
    componentWillUnmount: function(){
        clearInterval(this.interval);
        console.log("Component unmounted!");

    }
});

// creating new component because we want to delete first component - LifecycleComponent
var LifecycleContainer= React.createClass({
    mount: function(){
        ReactDOM.render(
            <LifecycleComponent/>,
            document.getElementById('renderHere')
        );
    },

    unmount: function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'));
    },

    render: function(){
        console.log("Lifecycle cointainer rendered");
        return(
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>UNMount</button>
                <div id="renderHere"></div>
            </div>
        )
    }
});

ReactDOM.render(
    <LifecycleContainer/>,
    document.getElementById('app')
);
