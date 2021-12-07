import React from 'react'
import { Pagination } from 'semantic-ui-react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'


const Home = () => {
    return (
        <div>
            <ItemListContainer />
            <div className='d-flex justify-content-center pt-3'>
            <Pagination />
            </div>
        </div>
    )
}

export default Home
