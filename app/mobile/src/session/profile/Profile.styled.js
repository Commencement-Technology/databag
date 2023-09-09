import { StyleSheet } from 'react-native';
import { Colors } from 'constants/Colors';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: Colors.screenBase,
  },
  details: {
    width: '100%',
    position: 'relative',
    top: -32,
    minHeight: 32,
    backgroundColor: 'yellow',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    backgroundColor: Colors.screenBase,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 2,
    borderColor: Colors.areaBorder,
  },
  control: {
    position: 'absolute',
    width: '100%',
    top: -24,
    display: 'flex',
    alignItems: 'center',
  },
  edit: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Colors.screenBase,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 2,
    borderColor: Colors.areaBorder,
  },
  editLabel: {
    color: Colors.text,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    fontSize: 16,
    fontFamily: 'roboto',
    color: Colors.linkText,
  },
  nameSet: {
    color: Colors.text,
    fontFamily: 'roboto',
    fontSize: 48,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  nameUnset: {
    color: Colors.inputPlaceholder,
    fontFamily: 'roboto',
    fontSize: 48,
    paddingTop: 8,
    paddingLeft: 16,
    fontStyle: 'italic',
  },
  username: {
    color: Colors.text,
    fontFamily: 'roboto',
    fontSize: 18,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  group: {
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: Colors.areaBase,
    borderRadius: 8,
    marginTop: 16,
  },
  divider: {
    width: '100%',
    height: 2, 
    backgroundColor: Colors.screenBase,
  },
  entry: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
    height: 48,
  },
  icon: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  locationSet: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: 'roboto',
  },
  locationUnset: {
    fontSize: 16,
    color: Colors.inputPlaceholder,
    fontFamily: 'roboto',
    fontStyle: 'italic',
  },
  descriptionSet: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: 'roboto',
  },
  descriptionUnset: {
    fontSize: 16,
    color: Colors.inputPlaceholder,
    fontFamily: 'roboto',
    fontStyle: 'italic',
  },
  visibleLabel: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: 'roboto',
  },
  track: {
    false: Colors.idleFill,
    true: Colors.activeFill,
  },
  visibleSwitch: {
    transform: [{ scaleX: .6 }, { scaleY: .6 }],
  },
});

