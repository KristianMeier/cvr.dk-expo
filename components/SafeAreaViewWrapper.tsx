import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'
import { Navigation } from './Navigation'
import { COLORS, FONT, FONTSIZES, SIZES } from '../theme'
import { VIRKOPEDIA_ENDPOINT } from '../constants'
import { useFetch } from '../hooks/useFetch'

interface SafeAreaViewWrapperProps {
  children: React.ReactNode
  header: string
}

export const SafeAreaViewWrapper = ({
  children,
  header,
}: SafeAreaViewWrapperProps) => {
  const { isLoading, error } = useFetch(VIRKOPEDIA_ENDPOINT)

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Navigation />
            <Text style={styles.header}>{header}</Text>
            {children}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
  },
  header: {
    marginBottom: SIZES.medium,
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.xxl,
  },
})
