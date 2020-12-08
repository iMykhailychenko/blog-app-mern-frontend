import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
  avatar: string | null | undefined;
  name: string;
  height?: number;
  width?: number;
}

const COLORS: { [key: string]: string } = {
  A: '#3273dc',
  B: '#32acdc',
  C: '#9832dc',
  D: '#a57c0a',
  E: '#3a001b',
  F: '#9832dc',
  G: '#07925d',
  H: '#29ac6a',
  I: '#371880',
  J: '#076b92',
  K: '#2e9207',
  L: '#07925d',
  M: '#301a14',
  N: '#35141e',
  O: '#0cbb78',
  P: '#07925d',
  Q: '#07925d',
  R: '#799207',
  S: '#07925d',
  T: '#127e54',
  U: '#35051d',
  V: '#776603',
  W: '#07925d',
  X: '#07925d',
  Y: '#49665b',
  Z: '#4f535a',
};

const UserAvatar = ({
  avatar,
  name,
  height = 3.5,
  width = 3.5,
}: IProps): ReactElement => {
  return avatar ? (
    <img
      className={css.avatar}
      style={{ height: `${height}rem`, width: `${width}rem` }}
      src={avatar}
      alt={name}
    />
  ) : (
    <div
      className={css.placeholder}
      style={{
        height: `${height}rem`,
        width: `${width}rem`,
        background: COLORS[name[0] || '#3273dc'],
      }}
    >
      {name}
    </div>
  );
};

export default UserAvatar;
