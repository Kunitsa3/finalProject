const item = {
  id: '123',
  name: 'awd',
  number1: 1,
  number2: 2,
  number3: 3,
  singleLine1: '1',
  singleLine2: '2',
  singleLine3: '3',
  multilineLine1: `1
  2`,
  multilineLine2: `2
  3`,
  multilineLine3: `3
  4`,
  date1: new Date(),
  date2: new Date(),
  date3: new Date(),
  boolean1: true,
  boolean2: false,
  boolean3: true,
};

const Themes = {
  Alcohol: 'Alcohol',
  Books: 'Books',
};

const collection = {
  id: '132',
  name: 'name',
  description: `Aboba`,
  theme: Themes.Alcohol,
};

export const getItem = (id, name) => ({
  id,
  name,
  number1: 1,
  number2: 2,
  number3: 3,
  singleLine1: '1',
  singleLine2: '2',
  singleLine3: '3',
  multilineLine1: `1
    2`,
  multilineLine2: `2
    3`,
  multilineLine3: `3
    4`,
  date1: new Date(),
  date2: new Date(),
  date3: new Date(),
  boolean1: true,
  boolean2: false,
  boolean3: true,
});
