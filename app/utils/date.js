

export const dateDifferenceUntilToday = (date) => {
  const today = new Date();
  const dateToCompare = new Date(date);

  const diff = {};
  diff.seconds = (Math.abs(today.getTime() - dateToCompare.getTime())) / 1000;
  diff.minutes = Math.ceil(diff.seconds / 60);
  diff.hours = Math.ceil(diff.minutes / 60);
  diff.days = Math.ceil(diff.hours / 24);
  diff.months = Math.ceil(diff.days / 30);
  diff.years = Math.ceil(diff.months / 12);

  return diff;
};

export const dateDifferenceAsString = (date) => {
  const diff = dateDifferenceUntilToday(date);
  const keys = Object.getOwnPropertyNames(diff).reverse();

  for (const i in keys) {
    const key = keys[i];
    const value = diff[key];
    if (value > 1) { return `${value} ${key}`; }
  }
  return '';
};
