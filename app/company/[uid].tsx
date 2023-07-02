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

const Company = () => {
  const params = useSearchParams()
  const companies = contentData.companiesData
  const selectedCompany = companies.find(
    (company) => t(company.uid) === params.uid
  )

  // @ts-ignore
  const formattedCompany = getConvertedCompanyData(selectedCompany)
  // @ts-ignore
  const companyName = t(selectedCompany?.companyName)

  if (!formattedCompany)
    return (
      <View>
        <Text>{t('companies.nocompanies')}</Text>
      </View>
    )

  return (
    <SafeAreaViewWrapper header={companyName}>
      <View style={styles.companyWrapper}>
        <View style={styles.companyContainer}>
          {formattedCompany.map(({ title, field }) => (
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
