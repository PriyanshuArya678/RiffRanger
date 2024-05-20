import {createSlice} from '@reduxjs/toolkit'

const InitialState = [
    {
      id: 1,
      name: ' ',
      price: '',
      image: ' ',
    }]
export const EcomItemSlice = createSlice({
    name:'userStatus1',
    InitialState,
    reducer: ({
        id: 2,
        name: 'Piano',
        price: 8000,
        image: 'piano.jpg'
      },
      {
        id: 3,
        name: 'Violin',
        price: 30000,
        image: 'violin.jpg'
      },
      {
          id: 4,
          name: 'Ukelele',
          price: 2000,
          image: 'ukelele.jpg'
        })

    })
export default EcomItemSlice.reducer

  