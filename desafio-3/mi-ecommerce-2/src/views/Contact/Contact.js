import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const Contact = () => (
    <div className='contacto'>
  <Segment inverted>
    <Form inverted className='container-fluid'>
     
        <Form.Input className='' fluid label='Nombre' placeholder='First name' />
        <Form.Input fluid label='Apellido' placeholder='Last name' />
        <Form.Input fluid label='E-mail'/>
        <Form.Input fluid label='Telefono'/>
    
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
  </div>
)
export default Contact
