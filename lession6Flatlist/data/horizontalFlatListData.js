const horizontalStatus = {
  rainy: {
    ios: 'ios-rainy',
    android: 'md-rainy'
  },
  sunny: {
    ios: 'ios-sunny',
    android: 'md-sunny'
  },
  cloudyNight: {
    ios: 'ios-cloudyNight',
    android: 'md-cloudyNight'
  },
  flash: {
    ios: 'ios-flash',
    android: 'md-flash'
  },
  cloud: {
    ios: 'ios-cloud',
    android: 'md-cloud'
  }
}
export default horizontalFlastListData = [{
  'key': 1,
  "hour": "1:00 PM",
  "status": horizontalStatus.sunny,
  "degrees": 24
}, {
  'key': 2,
  "hour": "12:59 AM",
  "status": horizontalStatus.rainy,
  "degrees": -10
}, {
  'key': 3,
  "hour": "7:38 PM",
  "status": horizontalStatus.cloud,
  "degrees": 0
}, {
  'key': 4,
  "hour": "7:27 PM",
  "status": horizontalStatus.sunny,
  "degrees": -9
}, {
  'key': 5,
  "hour": "2:19 AM",
  "status": horizontalStatus.flash,
  "degrees": 2
}, {
  'key': 6,
  "hour": "2:29 AM",
  "status": horizontalStatus.cloud,
  "degrees": 36
}, {
  'key': 7,
  "hour": "12:03 PM",
  "status": horizontalStatus.sunny,
  "degrees": 10
}, {
  'key': 8,
  "hour": "6:46 PM",
  "status": horizontalStatus.cloud,
  "degrees": -10
}]