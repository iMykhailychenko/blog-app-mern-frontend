import { ChangeEvent } from 'react';
import Hashtag from './Hashtag';
import { connect } from 'react-redux';
import { newPostTagsActions } from '../../../redux/new-post/newPostActions';
import { IState, Dispatch } from '../../../types';

const mapSTP = (state: IState): { tags: string[] } => ({
  tags: state.newPost.tags,
});

const mapDTP = (dispatch: Dispatch<string>) => ({
  handleInput: (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(newPostTagsActions(event.target.value)),
});

export default connect(mapSTP, mapDTP)(Hashtag);
