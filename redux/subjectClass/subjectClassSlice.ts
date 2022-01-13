import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, SubjectClassification } from "./utils"

export const subjectClassSlice = createSlice({
    name: 'subjectClass',
    initialState,
    reducers: {
        setSubjectClass: (state, action: PayloadAction<SubjectClassification>) => {
            state.currentSubjectClass = action.payload
        }
    }
})

export const { setSubjectClass } = subjectClassSlice.actions

export default subjectClassSlice.reducer