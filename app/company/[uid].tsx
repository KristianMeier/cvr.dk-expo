import { getConvertedCompanyData } from '../../utils'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { t } from '../../i18n'
import {
  BORDER_COLOR,
  BORDER_STYLE,
  BORDER_WIDTH,
  COLORS,
  FONT,
  FONTSIZES,
  SIZES,
} from '../../theme'
import { SafeAreaViewWrapper } from '../../components/SafeAreaViewWrapper'
import { useRouter, useSearchParams } from 'expo-router'
import { COMPANIES_ENDPOINT, SEARCH_PATH } from '../../constants'
import { useFetch } from '../../hooks/useFetch'

const Company = () => {
  const params = useSearchParams()
  const router = useRouter()
  const { data, isLoading } = useFetch(COMPANIES_ENDPOINT)
  const uid = params.uid

  // @ts-ignore
  const company = data.find((company) => t(company.uid) === uid)

  if (!company)
    return (
      <View>
        <Text>{t('companies.nocompanies')}</Text>
      </View>
    )

  return (
    <SafeAreaViewWrapper header="Company Details">
      <TouchableOpacity
        style={styles.backLink}
        onPress={() => router.push(SEARCH_PATH)}>
        <Text style={styles.backText}>{t('companiesBackToSearch')}</Text>
      </TouchableOpacity>
      <View style={styles.companyWrapper}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
          />
        ) : (
          <View style={styles.companyContainer}>
            {/* @ts-ignore */}
            {getConvertedCompanyData(company).map(({ title, field }) => (
              <View key={t(field)}>
                <Text style={styles.title}>{t(title)} </Text>
                <Text>{t(field)} </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </SafeAreaViewWrapper>
  )
}

export default Company

export const styles = StyleSheet.create({
  backLink: {
    width: '100%',
    alignItems: 'flex-start',
  },
  backText: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.s,
    color: COLORS.primary,
    marginBottom: SIZES.medium,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  companyWrapper: {
    width: '100%',
    padding: SIZES.medium,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderStyle: BORDER_STYLE,
  },
  companyName: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.s,
  },
  companyContainer: {
    gap: SIZES.large,
  },
  title: {
    fontFamily: FONT.bold,
  },
})
