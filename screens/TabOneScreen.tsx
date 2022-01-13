import { StyleSheet } from 'react-native';

import {
  Center,
  FormControl,
  VStack,
  Input
} from 'native-base';

import { RootTabScreenProps } from '../types';

import { SubjectClass } from '../components/Calculator/SubjectClass';
import { Subject } from '../components/Calculator/Subject';

import { useSelector } from 'react-redux';

import { selectSubject, selectSubjectClass } from '../redux/rootReducer';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const currentSubject = useSelector(selectSubject);
  return (
    <Center
      bg="white"
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <SubjectClass />
        <Subject />
        <FormControl>
          <FormControl.Label>수행평가({currentSubject.workout}%)</FormControl.Label>
          <Input placeholder="수행평가 점수입력" />
        </FormControl>
        <FormControl>
          <FormControl.Label>중간고사({currentSubject.midterm}%)</FormControl.Label>
          <Input placeholder="수행평가 점수입력" />
        </FormControl>
        <FormControl>
          <FormControl.Label>수행평가({currentSubject.final}%)</FormControl.Label>
          <Input placeholder="수행평가 점수입력" />
        </FormControl>
      </VStack>
    </Center>
  );
}

