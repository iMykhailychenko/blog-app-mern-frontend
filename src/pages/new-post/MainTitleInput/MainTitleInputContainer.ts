import { ChangeEvent } from 'react';
import MainTitleInput from './MainTitleInput';
import { connect } from 'react-redux';
import { newPostTitleActions } from '../../../redux/new-post/newPostActions';
import { Dispatch } from '../../../types';

const mapDTP = (dispatch: Dispatch<string>) => ({
  handleInput: (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(newPostTitleActions(event.target.value)),
});

export default connect(null, mapDTP)(MainTitleInput);
