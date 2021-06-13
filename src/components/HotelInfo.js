import React from 'react'
import { Section, List } from './common'
import services from './data/services.json'
import accessibility from './data/accessibility.json'

const arrivalInfo = Object.entries({
  'Check-in': '3:00 PM',
  'Check-out': '11:00 AM',
  Parking:
    'Self-parking in the underground garage is ￡15 per day and valet-parking is ￡50 per day.',
  'Airport Shuttle':
    'Our complimentary airport shuttles leave every hour on the hour, and make trips to Heathrow and Gatwick airports.',
  Trains: 'The nearest Underground station is at Leicester Square.',
  'Pet Policy':
    'Pets of all sizes and types are allowed in designated pet rooms, and the specified common areas. Service animals are allowed everywhere.',
})

export const HotelInfo = () => {
  return (
    <div className="scene" id="hotelinfo">
      <article className="heading">
        <h1>Essential Info</h1>
      </article>
      <article id="usefulinfo">
        <Section title="Arrival Information" id="arrivalinfo">
          <List
            data={arrivalInfo}
            iteratee={([key, value]) => (
              <List.Item key={`${key}}}`}>
                <strong>{key}: </strong>
                {value}
              </List.Item>
            )}
          />
        </Section>
        <Section
          title="Services and Amenities"
          content="Our services and amenities are designed to make your travel easy,
            your stay comfortable, and your experience one-of-a-kind."
          className="checklist"
          id="services"
        >
          <List
            data={services}
            iteratee={({ name }, idx) => (
              <List.Item key={`${name}_${idx}}`}>{name}</List.Item>
            )}
          />
        </Section>
        <Section
          title="Accessibility"
          content="We're committed to maintaining the same quality of service for every
            individual. We offer the following facilities for those with special
            needs:"
          className="checklist"
          id="accessibility"
        >
          <List
            data={accessibility}
            iteratee={({ name }, idx) => (
              <List.Item key={`${name}_${idx}}`}>{name}</List.Item>
            )}
          />
        </Section>
      </article>
      <article id="greenprogram">
        <h2>Landon Green Program</h2>
        <p>
          <strong>The Landon Hotel - London</strong> was recently renovated, and
          we considered the impact on the earth the entire way. From green
          building materials, to solar power, to energy-friendly lighting and
          appliances throughout the hotel - we’re saving energy in every socket,
          outlet, and switch. We’ve also initiated a recycling and composting
          program that reduces the load to local landfills, while providing
          valuable raw material for use in new products, or in the case of
          compost, for use in local gardens and landscapes.
        </p>
      </article>
    </div>
  )
}
