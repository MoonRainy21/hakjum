import { useDispatch } from "react-redux";
import { setSubject } from "../redux/subject/subjectSlice";
import { setSubjectClass } from "../redux/subjectClass/subjectClassSlice";


export function ResetForm () {
    const dispatch = useDispatch();
    dispatch(setSubject(""))
    dispatch(setSubjectClass(""))
}