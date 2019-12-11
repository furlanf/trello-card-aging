import $ from 'jquery';
import { dateDifferenceAsString, dateDifferenceUntilToday } from '../utils/date';

$.noConflict();

const findCard = (shortLink) => {
  console.log($('body'));
  console.log(shortLink);
  const obj = $(`.list-card[href*="${shortLink}"]`);
  console.log(obj);
  return obj;
};

export const spanWrapper = (cardId) => {
  const obj = findCard(cardId);
  if (obj.length === 0) { return $('<div />'); }

  let wrapper = obj.find('.trello-card-aging-span-wrapper');

  if (wrapper.length === 0) {
    wrapper = $('<div/>', {
      class: 'list-card-labels trello-card-aging-span-wrapper'
    }).insertAfter(obj.find('.list-card-details:eq(0)'));
  }

  return wrapper;
};

export const spanRealAge = (creationDate, settings) => $('<span/>', {
  text: dateDifferenceAsString(creationDate),
  title: `Created at ${creationDate.toLocaleDateString('en-US')}`,
  class: 'card-label',
  css: {
    float: 'left',
    color: settings.show_real_age_text_color,
    'background-color': settings.show_real_age_bg_color,
    'text-shadow': 'none'
  }
});

export const spanLastActivityDate = (lastModDate, settings) => $('<span/>', {
  text: `🕒 ${dateDifferenceAsString(lastModDate)}`,
  title: `Last activity at ${lastModDate.toLocaleDateString('en-US')}`,
  class: 'card-label',
  css: {
    float: 'right',
    color: settings.show_age_text_color,
    'background-color': settings.show_age_bg_color,
    'text-shadow': 'none'
  }
});

export const applyCardAging = (cardId, lastActivity, settings) => {
  const card = findCard(cardId);
  if (card.length === 0) { return; }

  const diffDays = dateDifferenceUntilToday(lastActivity).days;

  let agingLevel = 0;
  if (diffDays > 27) {
    agingLevel = 3;
  } else if (diffDays > 13) {
    agingLevel = 2;
  } else if (diffDays > 6) {
    agingLevel = 1;
  }

  const classes = ['aging-pirate', 'aging-regular', 'aging-level-1', 'aging-level-2', 'aging-level-3'];
  classes.forEach((classname) => {
    card.removeClass(classname);
  });

  if (agingLevel > 0) { card.addClass(`aging-${settings.apply_aging_style} aging-level-${agingLevel}`); }
};
