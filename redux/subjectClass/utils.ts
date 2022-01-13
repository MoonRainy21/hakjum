export type SubjectClassification = "" | "물리" | "수학"

export interface PathState {
    currentSubjectClass: SubjectClassification
}

export const initialState: PathState = {
    currentSubjectClass: ""
}