import { StyleSheet, Text, View } from 'react-native'

import { Colors } from '@/src/constants/theme'
import RimacLogoV2 from '@/src/icons/RimacLogoV2'
import Divider from '../../atoms/Divider'

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <RimacLogoV2 />
      </View>
      <Divider color={Colors.grey[80]} />
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
  text: {
    color: Colors.common.white,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  }
})