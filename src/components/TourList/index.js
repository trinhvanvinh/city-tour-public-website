import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../../data/tourData';

export default class TourList extends Component {

  state={
    tours:tourData
  }

  removeTour=id=>{
    const{tours}=this.state;
    const sortedTours=tours.filter(tour=>tour.id !==id);
    this.setState({
      tours:sortedTours
    })
  }

  render() {
    console.log(this.state.tours);
    const {tours} = this.state;
    return (
      <section className="tourlist" >
        {tours.map(tour=>{
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          )
        })}
      </section>
    )
  }
}
// 1.11