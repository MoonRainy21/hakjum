import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, SubjectType } from "./utils"

export const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        setSubject: (state, action: PayloadAction<SubjectType>) => {
            state.currentSubject = action.payload
        }
    }
})

export const { setSubject } = subjectSlice.actions
export default subjectSlice.reducer