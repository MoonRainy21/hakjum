import { FormControl, Select, CheckIcon } from "native-base"
import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { selectSubjectClass } from "../../redux/rootReducer"
import { setSubjectClass } from "../../redux/subjectClass/subjectClassSlice"
import { SubjectClassification } from "../../redux/subjectClass/utils"

export function SubjectClass() {
  const dispatch = useDispatch();
  const subjectclass = useSelector(selectSubjectClass);
  return (
    <FormControl isRequired>
      <FormControl.Label>과목분류</FormControl.Label>
      <Select
        minWidth="200"
        accessibilityLabel="subjectclass"
        placeholder="과목분류"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1"
        onValueChange={(itemValue) => {
          if (isSubjectClass(itemValue)) {
            dispatch(setSubjectClass(itemValue))
          }
        }}
        selectedValue={subjectclass}
      >
        <Select.Item label="물리" value="물리" />
        <Select.Item label="수학" value="수학" />
      </Select>
    </FormControl>
  )
}

function isSubjectClass (TBD : string) : TBD is SubjectClassification {
  if(TBD as SubjectClassification) {
    return true
  }
  return false
}