import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 78,
    paddingVertical: 10,
    backgroundColor: '#1A2232',
    flexDirection: 'row',
  },
  Tag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TagContent: {
    flex: 3,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(109, 158, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '4%',
  },
  fontStyle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  subfontStyle: {
    color: 'rgba(99, 115, 148, 1)',
  },
  Title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  SpanList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SpanText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
