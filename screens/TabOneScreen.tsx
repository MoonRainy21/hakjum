import { StyleSheet } from 'react-native';

import {
  Center,
  FormControl,
  VStack,
  Input,
  HStack,
  Button
} from 'native-base';

import { RootTabScreenProps } from '../types';

import { SubjectClass } from '../components/Calculator/SubjectClass';
import { Subject } from '../components/Calculator/Subject';

import { useSelector } from 'react-redux';

import { selectSubject, selectSubjectClass } from '../redux/rootReducer';
import { ResetForm } from '../utils/ResetForm';

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
          <Input placeholder="중간고사 점수입력" />
        </FormControl>
        <FormControl>
          <FormControl.Label>기말고사({currentSubject.final}%)</FormControl.Label>
          <Input placeholder="기말고사 점수입력" />
        </FormControl>
        <HStack space={10} alignItems='left'>
          <Button
            bg='black'
            onPress={() => {
              navigation.navigate('CalculateScreen')
            }}
          >
            조회하기!
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}

