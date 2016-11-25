var SecondComponent = React.createClass({
  propTypes: { // defining props types etc
    name: React.PropTypes.string.isRequired, // name have to be string and is required
    age: React.PropTypes.number.isRequired // number, required
  },
  getDefaultProps: function() { // this is deafault values of props, which will be used if ReactDOM.render props are not defined
    return {
      name: 'Daniel',
     age: 999
    }
  },
  render: function() {
    let name = this.props.name; // can be also var , it is because of variables scope. I can delete it also and put this.props.name in {} below
    let age = this.props.age;
    return (
      <div>
        <p>Imie to: {name}!</p>
        <p>Wiek: {age}</p>
      </div>
    )
  }
});

// SecondComponent.propTypes = {        <-- IT IS POSSIBLE TO DEFINE PROPTYPES HERE
//   name: React.PropTypes.number       IN React documentation it is written what way
// }

ReactDOM.render(
  <SecondComponent age='25' />,   // there is no name so name will be default - Daniel
  document.getElementById('app')   // there is error because age should be number, not string
);
