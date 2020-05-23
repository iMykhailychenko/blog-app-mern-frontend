import { ChangeEvent } from 'react';
import ShortDesc from './ShortDesc';
import { connect } from 'react-redux';
import { newPostDescActions } from '../../../redux/new-post/newPostActions';
import { Dispatch } from '../../../types';

const mapDTP = (dispatch: Dispatch<string>) => ({
  handleInput: (event: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(newPostDescActions(event.target.value)),
});

export default connect(null, mapDTP)(ShortDesc);
