import { getConvertedCompanyData } from '../../utils'
import contentData from '../../constants/database.json'
import { View, Text, StyleSheet } from 'react-native'
import { t } from '../../i18n'
import {
  BORDER_COLOR,
  BORDER_STYLE,
  BORDER_WIDTH,
  FONT,
  FONTSIZES,
  SIZES,
} from '../../theme'
import { SafeAreaViewWrapper } from '../../components/SafeAreaViewWrapper'
import { useSearchParams } from 'expo-router'
import { COMPANIES_ENDPOINT } from '../../constants'
import { useFetch } from '../../hooks/useFetch'

const companies = contentData.companiesData

const Company = () => {
  const params = useSearchParams()
  const { data } = useFetch(COMPANIES_ENDPOINT)
  const uid = params.uid

  console.log('data', data)
  console.log('companies', companies)

  const company = companies.find((company) => t(company.uid) === uid)
  //@ts-ignore
  const filteredCompany = getConvertedCompanyData(company)

  console.log(filteredCompany)

  if (!filteredCompany)
    return (
      <View>
        <Text>{t('companies.nocompanies')}</Text>
      </View>
    )

  return (
    <SafeAreaViewWrapper header="Company Details">
      <View style={styles.companyWrapper}>
        <View style={styles.companyContainer}>
          {filteredCompany.map(({ title, field }) => (
            <View key={t(field)}>
              <Text style={styles.title}>{t(title)} </Text>
              <Text>{t(field)} </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaViewWrapper>
  )
}

export default Company

export const styles = StyleSheet.create({
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
