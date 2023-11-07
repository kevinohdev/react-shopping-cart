import storeItems from '../data/storeItems.json'
import StoreStyles from '../styles/StoreStyles'
import { Item } from './Item'

export function Store() {
  return (
    <>
      <StoreStyles>
        <div className='grid'>
          {storeItems?.map(item => (
            <Item {...item}></Item>
          ))}
        </div>
      </StoreStyles>
    </>
  )
}