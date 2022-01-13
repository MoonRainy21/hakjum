
export interface ISubject {
    subjectclass: string
    name: string
    workout: number
    midterm: number
    final: number
}

export const initialState: ISubject = {
    subjectclass: "",
    name: "",
    workout: 0,
    midterm: 0,
    final: 0
}