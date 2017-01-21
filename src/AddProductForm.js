import React, {Component} from 'react';

export default class AddProductForm extends Component {

    static get propTypes(){
        return {
            onProductAdd: React.PropTypes.func.isRequired
        }
    }

    constructor (props){
        super(props);
        this.state = {};

        this._handleCategoryChange = this._handleCategoryChange.bind(this);
        this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
        this._handleProductAdd = this._handleProductAdd.bind(this);
        this._handleTitleChange = this._handleTitleChange.bind(this);
        this._handleWatchedChange = this._handleWatchedChange.bind(this);
    }

    _handleCategoryChange(event){
        this.setState({
            category: event.target.value
        });
    }

    _handleTitleChange(event){
        this.setState({
            title: event.target.value
        });
    }

    _handleDescriptionChange(event){
        this.setState({
            description: event.target.value
        });
    }

    _handleWatchedChange(event){
        this.setState({
            watched: event.target.checked
        });
    }

    _handleProductAdd(){
        this.props.onProductAdd(this.state);
        this.setState({
            title: undefined,
            description: undefined,
            watched: false,
            category: "Furniture"
        });
    }

    render() {
        return (
            <div style={{border: '1px solid grey', padding: '20px', margin: '20px 0 20px 0'}}>
                <h2>Add Product</h2>

                <p>Titel</p>
                <input value={this.state.title} onChange={this._handleTitleChange} />

                <p>Description</p>
                <input value={this.state.description} onChange={this._handleDescriptionChange} />

                <p>Category:</p>
                <select value={this.state.category} onChange={this._handleCategoryChange} >
                    <option value="Furniture">Furniture</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Food">Food</option>
                </select>

                <p></p>
                <input type="checkbox" value={this.state.watched} onChange={this._handleWatchedChange} />
                Watched?

                <p></p>
                <button onClick={this._handleProductAdd}>Add Product</button>

            </div>
        )
    }
}