import React, { Component, PropTypes } from 'react';
import { IntervalEnhance } from './interval-enhance.jsx';

// @IntervalEnhance
class CartItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    initalQty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      qty: props.initalQty,
      image: props.image,
      price: props.price,
      total: 0
    };
  }

  componentWillMount = () => {
    this.recalculateTotal();
  }

  increaseQty = () => {
    this.setState({ qty: this.state.qty + 1 }, this.recalculateTotal);
  }

  decreaseQty = () => {
    this.setState({ qty: this.state.qty - 1 }, this.recalculateTotal);
  }

  recalculateTotal = () => {
    this.setState({ total: this.state.qty * this.props.price });
  }

  render() {
    return(
      <aricle className="row large-4">
        <figure className="text-center">
          <p><img src={this.state.image} alt="image"/></p>
          <figcaption><h2>{this.state.title}</h2></figcaption>
        </figure>
        <p className="large-4 column"><strong>Qsuasssasdntity: {this.state.qty}</strong></p>
        <p className="large-4 column">
          <button onClick={this.increaseQty} className="button success">+</button>
          <button onClick={this.decreaseQty} className="button alert">-</button>
        </p>
        <p className="large-4 column"><strong>Pricsse per item:</strong> ￥{this.state.price}</p>
        <h3 className="large-12 column text-center">Total: ￥{this.state.total}</h3>
      </aricle>
    );
  }
}

export default IntervalEnhance(CartItem);
