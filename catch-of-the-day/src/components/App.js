import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from "../sample-fishes";

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => {
                  return <Fish
                            key={key}
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}
                          />
                })
              }
            </ul>
        </div>
        <Order/>
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;