import { SearchResults } from '../components/Search/SearchResults'
import { TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import { t } from '../i18n'
import { SearchContextProps, useSearchContext } from '../context'
import {
  SIZES,
  BORDER_WIDTH,
  BORDER_COLOR,
  BORDER_STYLE,
  COLORS,
} from '../theme'
import { SafeAreaViewWrapper } from '../components/SafeAreaViewWrapper'
import { COMPANIES_ENDPOINT } from '../constants'
import { useFetch } from '../hooks/useFetch'

const Index = () => {
  const { searchField, setSearchField } =
    useSearchContext() as SearchContextProps
  const { data, isLoading } = useFetch(COMPANIES_ENDPOINT)

  return (
    <SafeAreaViewWrapper header={t('searchTitle')}>
      <TextInput
        style={styles.textInput}
        value={searchField}
        onChangeText={setSearchField}
        placeholder="Write Company Name, Cvr Number or Address"
      />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />
      ) : (
        <SearchResults allCompanies={data} />
      )}
    </SafeAreaViewWrapper>
  )
}

export default Index

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    flex: 1,
    padding: SIZES.medium,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
})
