import React, { Component, createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import throttle from 'lodash.throttle';

// styles
import styles from './ScrollTop.module.css';
import pop from '../../transitions/pop.module.css';

interface Props {}
interface State {
  top: boolean;
}

export default class ScrollTop extends Component<Props, State> {
  buttonRef = createRef<HTMLButtonElement>();

  state = {
    top: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 300));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 300));
  }

  handleScroll = (): void => {
    const { top } = this.state;
    const scrollTop = window.scrollY < 250 ? false : true;

    if (top === scrollTop) return;

    this.setState({ top: scrollTop });
  };

  handleClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { top } = this.state;

    return (
      <CSSTransition in={top} timeout={600} classNames={pop} unmountOnExit>
        <button
          className={styles.btn}
          ref={this.buttonRef}
          onClick={this.handleClick}
          type="button"
        />
      </CSSTransition>
    );
  }
}
