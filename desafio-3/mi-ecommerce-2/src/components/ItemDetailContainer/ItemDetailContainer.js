// import React from 'react'
// import './ItemDetailContainer.css'

// const ItemDetailContainer = () => {
//     return (
//         <div>
//             <h1>Item Detail Container</h1>
//         </div>
//     )
// }

// export default ItemDetailContainer
// import React from 'react'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import prueba from '../img/prueba.jpeg'

// function ModalExampleModal() {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <Modal
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       trigger={<Button>Show Modal</Button>}
//     >
//       <Modal.Header>Select a Photo</Modal.Header>
//       <Modal.Content image>
//         <Image size='medium' src={prueba} wrapped />
//         <Modal.Description>
//           <Header>Default Profile Image</Header>
//           <p>
//             We've found the following gravatar image associated with your e-mail
//             address.
//           </p>
//           <p>Is it okay to use this photo?</p>
//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color='black' onClick={() => setOpen(false)}>
//           Nope
//         </Button>
//         <Button
//           content="Yep, that's me"
//           labelPosition='right'
//           icon='checkmark'
//           onClick={() => setOpen(false)}
//           positive
//         />
//       </Modal.Actions>
//     </Modal>
//   )
// }

// export default ModalExampleModal

/*
import React, {useEffect, useState} from 'react';
import ItemDetail from '../../views/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
         fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setItems(json))
        }, 2000 )
    }, []);

console.log(items)

    return (
        <div>
           {items.map((item) => {
               return <ItemDetail item={item} />;
           })}
           </div>
    );       
};

export default ItemDetailContainer
*/