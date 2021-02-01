import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

export const DEFAULT_COLOR = "#00202B"
export const TEXT_COLOR = "white"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_COLOR,
    padding: 20,
  }
})