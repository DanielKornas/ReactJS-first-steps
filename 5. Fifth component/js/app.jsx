var LikesComponent = React.createClass({
    updateLikes: function(){
        ReactDOM.render(
            <LikesComponent likes={this.props.likes + 1} />,
            document.getElementById('app')
        )
    },
    getDefaultProps: function(){
        return({
            likes: 0
        })
    },

    getInitialState: function(){
        return({
            popular: false // so expression below in render will be false - this.state.popular - false
        })
    },

    componentWillReceiveProps: function(nextProps){
        console.log(nextProps);
        console.log("componentWillReceiveProps");
        this.setState({
            popular:nextProps.likes >= 10 // changes state -> if likes >=10 , it will be true so expression below will be true , no false anymore
        })
    },

    // should components update? new method , in our case we want to update component if number if likes is 2,4,6,8,etc
    shouldComponentUpdate: function(nextProps, nextState){
        console.log("Should update?");
        console.log(nextProps);
        console.log(nextState);
        return nextProps.likes % 2 === 0 ; // if likes is 2,4,6 it is true show component should update
    },

    render: function(){
        console.log("components rendered")
        return (
            <div className="container">
                <h1>{this.state.popular ? "I'm popular": null}</h1>  {/* if is true: i'm popular ; if not: null */}
                <button className="btn blue-btn" onClick={this.updateLikes}>Likes: {this.props.likes}</button>
            </div>
        )
    },

    componentDidUpdate: function(prevProps, prevState){
        console.log('Previous props:', prevProps);
        console.log('Previous state:', prevState);
        console.log(ReactDOM.findDOMNode(this));
    }
});

    ReactDOM.render(
        <LikesComponent />,
        document.getElementById('app')
    );
