
const intit = {
    SelectedSeat: [

    ],
    MovieSelected: [

    ]
}

const rootReducers = (state = intit, action) => {
    const arr = state.SelectedSeat
    const index = arr.findIndex((obj) => obj?.id === action.payload?.id)
    switch (action.type) {
        case 'SelectedSeat/AddSeat':
            return {
                ...state,
                SelectedSeat: [...state.SelectedSeat, action.payload]
            }
        case 'SelectedSeat/removeSeat':
            if (index !== -1) {
                arr.splice(index, 1)
            } else {
                console.log('ko co')
            }
            return {
                ...state,
                SelectedSeat: [...arr]
            }
        case 'SelectedSeat/clear':
            return {
                ...state,
                SelectedSeat: []
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducers
