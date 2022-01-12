interface ISubject {
    subjectclass: string
    name: string
    workout: number
    midterm: number
    final: number
}

export const DBSubject : ISubject[] = [
    {
        subjectclass: "물리",
        name: "물리I",
        workout: 40,
        midterm: 30,
        final: 30
    },
    {
        subjectclass: "물리",
        name: "물리II",
        workout: 20,
        midterm: 45,
        final: 35
    },
    {
        subjectclass: "물리",
        name: "물리III",
        workout: 40,
        midterm: 30,
        final: 30
    },
    {
        subjectclass: "수학",
        name: "수학I",
        workout: 30,
        midterm: 35,
        final: 35
    },
    {
        subjectclass: "수학",
        name: "수학II",
        workout: 30,
        midterm: 35,
        final: 35
    },
]