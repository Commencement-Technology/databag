import { Appearance } from 'react-native'

const LightColors = {
  theme: 'light',
  tabBar: '#448866',
  activeTabIcon: '#ffffff',
  idleTabIcon: '#cccccc',
  activeBorder: '#338866',
  idleBorder: '#dddddd',
  activeFill: '#66aa88',
  linkText: '#338866',
  dangerText: '#ff8888',
  labelText: '#555555',
  iconText: '#fffff',
  unsetText: '#999999',
  descriptionText: '#888888',
  text: '#444444',
  screenBase: '#dddddd',
  areaBase: '#ffffff',
  modalBase: '#ffffff',
  modalOverlay: 'rgba(52,52,52,0.8)',
  headerBar: '#eeeeee',
  primaryButton: '#448866',
  primaryButtonText: '#ffffff',
  cancelButton: '#888888',
  cancelButtonText: '#aaaaaa',
  disabledButton: '#dddddd',
  disabledButtonText: '#aaaaaa',
  dangerButton: '#ff5555',
  dangerButtonText: '#ffffff',
  inputBase: '#eeeeee',
  inputPlaceholder: '#888888',
  inputText: '#444444',
  connectedIndicator: '#41d041',
  connectingIndicator: '#0000cc',
  requestedIndicator: '#00bbbb',
  pendingIndicator: '#bbbb00',
  confirmedIndicator: '#88bb00',
  unknownIndicator: '#dddddd',
  errorIndicator: '#ffaaaa',
  horizontalDivider: '#eeeeee',
  verticalDivider: '#aaaaaa',
  unreadIndicator: '#00aa00',
  enabledIndicator: '#8fbea7',
  disabledIndicator: '#eeeeee',
  disconnectedIndicator: '#aa0000',
  sliderGrip: '#eeeeee',
};

const DarkColors = {
  theme: 'dark',
  tabBar: '#111111',
  activeTabIcon: '#dddddd',
  idleTabIcon: '#aaaaaa',
  activeBorder: '#aaaaaa',
  idleBorder: '#eeeeee',
  activeFill: '#559955',
  linkText: '#88eecc',
  dangerText: '#ffaaaa',
  labelText: '#eeeeee',
  iconText: '#fffff',
  unsetText: '#aaaaaa',
  descriptionText: '#bbbbbb',
  text: '#ffffff',
  screenBase: '#333333',
  areaBase: '#555555',
  modalBase: '#111111',
  modalOverlay: 'rgba(88,88,88,0.8)',
  headerBar: '#555555',
  primaryButton: '#448866',
  primaryButtonText: '#ffffff',
  cancelButton: '#888888',
  cancelButtonText: '#eeeeee',
  disabledButton: '#888888',
  disabledButtonText: '#aaaaaa',
  dangerButton: '#ff5555',
  dangerButtonText: '#ffffff',
  inputBase: '#333333',
  inputPlaceholder: '#aaaaaa',
  inputText: '#eeeeee',
  connectedIndicator: '#00cc00',
  connectingIndicator: '#0000cc',
  requestedIndicator: '#00bbbb',
  pendingIndicator: '#bbbb00',
  confirmedIndicator: '#88bb00',
  unknownIndicator: '#dddddd',
  errorIndicator: '#ffaaaa',
  horizonalDivider: '#888888',
  verticalDivider: '#aaaaaa',
  unreadIndicator: '#00aa00',
  enabledIndicator: '#8fbea7',
  disabledIndicator: '#eeeeee',
  disconnectedIndicator: '#aa0000',
  sliderGrip: '#eeeeee',
};

function getColor(label) {
  return Appearance.getColorScheme() === 'dark' ? DarkColors[label] : LightColors[label];
}

export const Colors = {
  theme: getColor('theme'),
  tabBar: getColor('tabBar'),
  activeTabIcon: getColor('activeTabIcon'),
  idleTabIcon: getColor('idleTabIcon'),
  idleBorder: getColor('idleBorder'),
  activeBorder: getColor('activeBorder'),
  activeFill: getColor('activeFill'),
  linkText: getColor('linkText'),
  dangerText: getColor('dangerText'),
  labelText: getColor('labelText'),
  iconText: getColor('iconText'),
  unsetText: getColor('unsetText'),
  descriptionText: getColor('descriptionText'),
  text: getColor('text'),
  screenBase: getColor('screenBase'),
  areaBase: getColor('areaBase'),
  modalOverlay: getColor('modalOverlay'),
  modalBase: getColor('modalBase'),
  headerBar: getColor('headerBar'),
  primaryButton: getColor('primaryButton'),
  primaryButtonText: getColor('primaryButtonText'),
  cancelButton: getColor('cancelButton'),
  cancelButtonText: getColor('cancelButtonText'),
  disabledButton: getColor('disabledButton'),
  disabledButtonText: getColor('disabledButtonText'),
  dangerButton: getColor('dangerButton'),
  dangerButtonText: getColor('dangerButtonText'),
  inputBase: getColor('inputBase'),
  inputPlaceholder: getColor('inputPlaceholder'),
  inputText: getColor('inputText'),
  connectedIndicator: getColor('connectedIndicator'),
  connectingIndicator: getColor('connectingIndicator'),
  requestedIndicator: getColor('requestedIndicator'),
  pendingIndicator: getColor('pendingIndicator'),
  confirmedIndicator: getColor('confirmedIndicator'),
  unknownIndicator: getColor('unknownIndicator'),
  errorIndicator: getColor('errorIndicator'),
  horizonalDivider: getColor('horizontalDivider'),
  verticalDivider: getColor('verticalDivider'),
  unreadIndicator: getColor('unreadIndicator'),
  enabledIndicator: getColor('enabledIndicator'),
  disabledIndicator: getColor('disabledIndicator'),
  disconnectedIndicator: getColor('disconnectedIndicator'),
  sliderGrip: getColor('sliderGrip'),

  background: '#8fbea7',
  primary: '#448866',
  titleBackground: '#f6f6f6',
  formBackground: '#f2f2f2',
  formFocus: '#f8f8f8',
  formHover: '#efefef',
  grey: '#888888',
  white: '#ffffff',
  divider: '#dddddd',
  mask: '#dddddd',
  encircle: '#cccccc',
  alert: '#ff8888',
  enabled: '#444444',
  lightgrey: '#bbbbbb',
  disabled: '#aaaaaa',
  text: '#444444',
  link: '#0077CC',
  lightText: '#686868',

  active: '#222222',
  idle: '#707070',

  itemDivider: '#eeeeee',
  
  connected: '#4488FF',
  connecting: '#dd88ff',
  requested: '#448844',
  pending: '#ffaa22',
  confirmed: '#aaaaaa',
  error: '#ff4444',

  profileForm: '#e8e8e8',
  profileDivider: '#aaaaaa',
  statsForm: '#ededed',
  statsDivider: '#afafaf',
  channel: '#f2f2f2',
  card: '#eeeeee',

  selectHover: '#fafafa',
};

export default Colors;
