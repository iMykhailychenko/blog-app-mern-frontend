import Navbar from './Navbar';
import { connect } from 'react-redux';
import { menuActions } from '../../../redux/mobile_menu/menuActions';
import { IState, Dispatch } from '../../../types';

const mapSTP = (state: IState): Pick<IState, 'menu'> => ({
  menu: state.menu,
});

const mapDTP = (dispatch: Dispatch<boolean>) => ({
  toggleMenu: (menu: boolean) => dispatch(menuActions(menu)),
});

export default connect(mapSTP, mapDTP)(Navbar);
