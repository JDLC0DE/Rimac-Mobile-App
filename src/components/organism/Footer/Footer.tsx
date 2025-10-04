import { StyleSheet, Text, View } from 'react-native'

import { Colors } from '@/src/constants/theme'
import RimacLogoV2 from '@/src/icons/RimacLogoV2'

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <RimacLogoV2 />
      </View>
      <View style={styles.divider} />
      <Text style={styles.text}>© 2023 RIMAC Seguros y Reaseguros.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    height: 152,
    backgroundColor: Colors.grey[100],
    rowGap: 24,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.grey[80],
  },
  text: {
    color: Colors.common.white,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  }
})