import request from '../utils/request';
import { TRELLO_API_URL } from './constants';

const getBoardList = (boardId) => {
  const requestURL = `${TRELLO_API_URL}Boards/${boardId}/lists/open`;
  const requestOptions = {
    method: 'GET'
  };

  return request(requestURL, requestOptions);
};

const getListById = (listId) => {
  const requestURL = `${TRELLO_API_URL}Lists/${listId}/cards?fields=id,shortLink&actions=all`;
  const requestOptions = {
    method: 'GET'
  };

  return request(requestURL, requestOptions);
};

const Trello = {
  getBoardList,
  getListById
};

export default Trello;
