import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as SettingsActions from '../actions/settings';
import SettingsPage from './settings/SettingsPage';

import trelloService from '../services/trello';
import { spanWrapper, spanRealAge, spanLastActivityDate, applyCardAging } from '../wrappers/wrapper';

class App extends Component {

  componentDidMount() {
    const { settings } = this.props;

    if ((settings.show_age || settings.apply_aging || settings.show_real_age)) {
      this.getBoardList();
    }
  }

  getBoardList = async () => {
    const location = 'https://trello.com/b/lMmUyJYg/partyguru';
    const listId = location.split('/')[4];

    const boardList = await trelloService.getBoardList(listId);
    this.getCardList(boardList);
  }

  getCardList = async (boardList) => {
    const { settings } = this.props;
    const promises = [];
    if (boardList) {
      boardList.map(({ id }) => promises.push(trelloService.getListById(id)));
      const cardsList = await Promise.all(promises);
      cardsList.forEach((cards) => {
        cards.forEach((card) => {
          if (card.actions.length === 0) { return; }

          const cardId = card.shortLink;
          const creationDate = new Date(card.actions[card.actions.length - 1].date);
          const lastModDate = new Date(card.actions[0].date);

          if (settings.show_real_age) spanRealAge(creationDate, settings).appendTo(spanWrapper(cardId));

          if (settings.show_age) spanLastActivityDate(lastModDate, settings).appendTo(spanWrapper(cardId));

          if (settings.apply_aging) { applyCardAging(cardId, lastModDate, settings); }
        });
      });
    }
  }

  render() {
    return (
      <div>
        <SettingsPage />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(mapStateToProps)(App);
