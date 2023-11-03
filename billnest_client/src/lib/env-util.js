import Bowser from 'bowser';

const browser = Bowser.getParser(global.navigator.userAgent);
const isMobileBrowser = () => browser.getPlatformType() === 'mobile';
const isMobile = isMobileBrowser()

export default {
  isMobile
};