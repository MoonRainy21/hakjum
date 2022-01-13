import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./utils"

import { DBSubject } from "../../SubjectData";

export const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        setSubject: (state, action: PayloadAction<string>) => {
            const subject = DBSubject.find((subject, index) => {
                return subject.name === action.payload
            })
            if (subject === undefined){
                alert("subject is undefined")
                return
            }
            state.final = subject.final
            state.midterm = subject.midterm
            state.name = subject.name
            state.subjectclass = subject.subjectclass
            state.workout = subject.workout
        }
    }
})

export const { setSubject } = subjectSlice.actions
export default subjectSlice.reducer