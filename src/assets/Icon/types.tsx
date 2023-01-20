import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as Menu } from './svg/menu.svg';
import {ReactComponent as Play } from './svg/play.svg'
import {ReactComponent as Lucas } from './svg/name.svg'
import {ReactComponent as Close } from './svg/icon-close.svg'



const IconsTypes = {
  logo : Logo,
  menu : Menu,
  play : Play,
  lucas : Lucas,
  close : Close
};

export default IconsTypes;

export type IconName =
  | 'logo'
  | 'menu'
  | 'play'
  | 'lucas'
  | 'close'



