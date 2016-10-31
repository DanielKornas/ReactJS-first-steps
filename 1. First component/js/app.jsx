var insertto = document.getElementById("container");  // finding element in DOM

var Hello = React.createClass({   // creating component
    render: function() {
        return (
            <h3>Hello, {this.props.myCustomnameHere}!</h3>   // this.props - necessary
        );
    }
});

ReactDOM.render(
    <div>
        <Hello myCustomnameHere="Daniel"/>
        <Hello myCustomnameHere="Mark"/>
    </div>,
insertto);  
