import { FormControl, Select, CheckIcon } from "native-base"
import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { selectSubject, selectSubjectClass } from "../../redux/rootReducer"
import { setSubject } from "../../redux/subject/subjectSlice"
import { DBSubject } from "../../utils/SubjectData"

export function Subject() {
  const dispatch = useDispatch();
  const subjectclass = useSelector(selectSubjectClass);
  const subject = useSelector(selectSubject);
  return (
    <FormControl isRequired>
      <FormControl.Label>과목</FormControl.Label>
      <Select
        minWidth="200"
        accessibilityLabel="subjectclass"
        placeholder="과목"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1"
        onValueChange={(itemValue) => {
          dispatch(setSubject(itemValue))
        }}
        isDisabled={subjectclass === ""}
        selectedValue={subject.name}
      >
        {renderSubjects(subjectclass)}
      </Select>
    </FormControl>
  )
}

const renderSubjects = (subjectClass: any) => {
  const subjects = DBSubject.filter((subject) => {
    return subject.subjectclass === subjectClass
  })

  return subjects.map((subject) => {
    return <Select.Item label={subject.name} value={subject.name} />
  })
}