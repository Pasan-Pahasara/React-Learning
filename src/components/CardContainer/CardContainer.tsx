import React, { Component } from 'react'
import Card from '../Card/Card'

export default class CardContainer extends Component {
  render() {
    return (
        <div className="flex justify-center gap-6 p-4">
        <Card
          title="Card 1"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
          title="Card 2"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
          title="Card 3"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
          title="Card 4"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        </div>
    )
  }
}
