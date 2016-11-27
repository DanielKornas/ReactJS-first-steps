class Counter extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {count : 0};
        this.click = this.click.bind(this);
    }

    click(){
        console.log("Clicked");
    }

    render(){
        return (
            <div className="container">
                <Button className="btn blue-btn" clickHandler={this.click} text="Click it" />   {/*click - click function */}
            </div>
        )
    }
}

    Counter.defaultProps = {text: "Hello"}
    Counter.propTypes = {text: React.PropTypes.string}

    const Button = (props) => {
        return (
            <button className={props.className} onClick={props.clickHandler}>{props.text}</button>
        )
    }

    ReactDOM.render(
        <Counter />,
        document.getElementById('app')
    );
