import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState} from "./utils"

export const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        setSubject: (state, action: PayloadAction<string>) => {
            state.currentSubject = action.payload
        }
    }
})

export const { setSubject } = subjectSlice.actions
export default subjectSlice.reducer