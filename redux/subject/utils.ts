export type SubjectType = "" | "물리I" | "물리II"

export interface PathState {
    currentSubject: SubjectType
}

export const initialState: PathState = {
    currentSubject: ""
}