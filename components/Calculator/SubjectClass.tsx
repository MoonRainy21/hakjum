import { FormControl, Select, CheckIcon } from "native-base"
import React from "react"


export function SubjectClass() {
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
            alert(itemValue + " was selected.")
          }}
        >
          <Select.Item label="물리" value="physics"/>
        </Select>
      </FormControl>
    )
  }