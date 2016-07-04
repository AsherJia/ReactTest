import React, { Component, PropTypes } from 'react';
import { IntervalEnhance } from './interval-enhance.jsx';
import Immutable from 'immutable';

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

  componentDidMount = () => {
    var s1 = Immutable.Map({a:1, b:2});
    var s2 = s1.set('b', 20);

    console.error('s1: ', s1.toObject());
    console.error('s2: ', s2.toObject());

    var s3 = [1,2,3,4];
    var s3Immutable =Immutable.fromJS(s3);
    console.error('s3Immutable: ', s3Immutable);

    var map1 = Immutable.Map({a:1, b:1, c:1});
    var map2 = Immutable.Map({a:1, b:1, c:1});
    console.error(map1 !== map2);
    console.error(Object.is(map1, map2) === false);
    console.error(Immutable.is(map1, map2) === true);
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
          {
            /*<p><img src={this.state.image} alt="image"/></p>*/
          }
          <figcaption><h2>{this.state.title}</h2></figcaption>
        </figure>
        <p className="large-4 column"><strong>Qsuasssasdntity: {this.state.qty}</strong></p>
        <p className="large-4 column">
          <button onClick={this.increaseQty} className="button success">+</button>
          <button onClick={this.decreaseQty} className="button alert">-</button>
        </p>
        <p className="large-4 column"><strong>Pricsse per item:</strong> ￥{this.state.price}</p>
        <h3 className="large-12 column text-center">Total: ￥{this.state.total}</h3>
        <br/>
      </aricle>
    );
  }
}

export default IntervalEnhance(CartItem);
