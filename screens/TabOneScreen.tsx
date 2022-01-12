import { StyleSheet } from 'react-native';

import {
  Center,
  VStack,
} from 'native-base';

import { RootTabScreenProps } from '../types';

import { SubjectClass } from '../components/Calculator/SubjectClass';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <Center
      bg="white"
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <SubjectClass/>
      </VStack>
    </Center>
  );
}

