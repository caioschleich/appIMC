import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    alignItems: 'center',
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 50,
    backgroundColor: '#414B55',
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 0,
    padding: 0,
  },
  formLabel: {
    color: '#fff',
    fontSize: 20,
    marginTop: 0,
    marginLeft: 23,
  },
  input: {
    color: '#417A85',
    fontSize: 20,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 20,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonCalculator: {
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginTop: 30,
    backgroundColor: '#cdf200',
    padding: 15,
  },
  textbuttonCalculator: {
    fontSize: 20,
    color: '#212830',
  },
});

export default styles