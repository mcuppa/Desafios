import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardExampleImageCard = ({data}) => (
  <Card>
    <Image src='' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>{data.email}</Card.Meta>
      <Card.Description>
        {data.name} is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard
