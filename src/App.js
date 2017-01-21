import React from 'react';
import Product from './Product';
import AddProductForm from './AddProductForm';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: [
            {title: 'Metal Chair', description: 'My favorite chair'},
            {title: 'Wooden Chair', description: 'Super duper chair'},
            {title: 'Oak Chair', description: 'In perfect condition'}
            
          ]
    };
    this._handlerProductAdd = this._handlerProductAdd.bind(this);
  }

  _handlerRemove() {
    this.setState({
      products: this.state.products.splice(1, this.state.products.length - 1)
    });
  }

  _handlerProductAdd(newProduct){
    this.setState({
      products: this.state.products.concat(newProduct)
    });
  }


  render() {
    return (
      <div className="App" >
        <h1>Products Listing</h1>

        <AddProductForm onProductAdd={this._handlerProductAdd} />

        <button className="Button" onClick={this._handlerRemove.bind(this)}>Remove first</button>
        { this.state.products.map((p,i) => { return <Product {...p} key={p.title} nr={i} /> })}
      </div>
    );
  }
}
