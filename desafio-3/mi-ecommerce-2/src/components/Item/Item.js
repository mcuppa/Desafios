

import React from 'react'
import './Item.css'
import { Card, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

 const Item = ({data}) => (
   <Card>
     <Image src={data.avatar_url} wrapped ui={false} />
     <Card.Content className="cardContainer">
       <Card.Header>{data.login}</Card.Header>
       <Card.Meta>{data.email}</Card.Meta>
       <Card.Description>
         {data.login} is a comedian living in Nashville.
       </Card.Description>
     </Card.Content>
     <Link to='/item'><Button>Mas info</Button></Link>
   </Card>
 )


export default Item

