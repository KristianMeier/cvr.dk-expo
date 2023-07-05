import { SafeAreaViewWrapper } from '../components/SafeAreaViewWrapper'
import { View, Text } from 'react-native'

const TestPage = () => {
  return (
    <SafeAreaViewWrapper header="Test Page">
      <View>
        <Text>Test Page</Text>
      </View>
    </SafeAreaViewWrapper>
  )
}

export default TestPage
