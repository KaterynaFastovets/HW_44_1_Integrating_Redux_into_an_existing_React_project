const ActionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
  }

  export const increment = ()=> ({
    type: ActionTypes.INCREMENT 
  })
  
  export const decrement = () => ({
    type: ActionTypes.DECREMENT 
  })

  export default ActionTypes