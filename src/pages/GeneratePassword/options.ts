const complexityList: Array<ComplexityItem> = [
  { id: 'all', value: 'All' },
  { id: 'numeric', value: 'Digits' },
  { id: 'special', value: 'Special Chars' },
  { id: 'lower', value: 'Lower Case Chars' },
  { id: 'upper', value: 'Upper Case Chars' },
];

const temporalList: Array<TemporalItem> = [
  { id: 'minute', value: 'Minute(s)' },
  { id: 'hour', value: 'Hour(s)' },
  { id: 'day', value: 'Day(s)' },
];

const options = {
  temporalList,
  complexityList,
};

export default options;