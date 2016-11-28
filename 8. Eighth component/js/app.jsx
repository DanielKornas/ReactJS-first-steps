let BaseCount = (BasicComponent) => class extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount(){
        console.log('I have been clicked');
        this.setState ({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <div className="container">
                {/* ...this.state - have an access to everything in state   */}
                <BasicComponent {...this.state} myname = {this.incrementCount}/>
            </div>
        )
    }
}

{/* STATELESS FUNCTIONAL COMPONENT:   */}

    const Button = (props) => {
        console.log(props)
        return(
            <button className="btn blue-btn" onClick={props.myname}>Count: {props.count}</button>
        )
    }

    const Label = (props) => {
        return(
            <label onMouseMove={props.myname}>Count: {props.count}</label>
        )
    }


let ExtendedButton = BaseCount(Button);
let ExtendedLabel = BaseCount(Label);

    const Container = () => {

            return(
                <div>
                    <ExtendedButton />,
                    <ExtendedLabel />
                </div>
            )

    }

    ReactDOM.render(
        <Container/>,
        document.getElementById('app')
    );
