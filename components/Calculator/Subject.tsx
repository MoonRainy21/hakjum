import { FormControl, Select, CheckIcon } from "native-base"
import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { selectSubjectClass } from "../../redux/rootReducer"
import { setSubject } from "../../redux/subject/subjectSlice"
import { SubjectType } from "../../redux/subject/utils"

export function Subject() {
  const dispatch = useDispatch();
  const subjectclass = useSelector(selectSubjectClass);
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
          if (isSubject(itemValue)) {
            dispatch(setSubject(itemValue))
          }
        }}
        isDisabled={subjectclass===""}
      >
        <Select.Item label="물리I" value="물리" />
        <Select.Item label="물리II" value="물리II" />
      </Select>
    </FormControl>
  )
}

function isSubject (TBD : string) : TBD is SubjectType {
  if(TBD as SubjectType) {
    return true
  }
  return false
}