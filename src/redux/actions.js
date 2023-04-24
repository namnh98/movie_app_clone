
export const AddSeat = (data) => {
    return {
        type: 'SelectedSeat/AddSeat',
        payload: data
    }
}

export const removeSeat = (data) => {
    return {
        type: 'SelectedSeat/removeSeat',
        payload: data
    }
}

export const changeType = (data) => {
    return {
        type: 'SelectedSeat/changeType',
        payload: data
    }
}

