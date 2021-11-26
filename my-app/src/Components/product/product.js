import React, {Component} from 'react';

export class Product extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts:[]
      }
    };
  
    componentDidMount(){
      let url = "http://localhost:3001/product"
      fetch(url)
      .then(resp => resp.json())
      .then(data => {

        let posts=data.map((product, index) => {
            return (
              <div key={index}>
                <h3>{product.name}</h3>
                <p>price: {product.price}</p>
               </div>
            )
                                                    
        })
        this.setState({posts:posts});
      })
    }
    render() {
      return (
      <div className="App">
        {this.state.posts}
      </div>
      );
    }
  }
  