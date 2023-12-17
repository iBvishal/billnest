import Bowser from 'bowser';

const browser = Bowser.getParser(navigator.userAgent);
const isMobileBrowser = () => browser.getPlatformType() === 'mobile';
const isMobile = isMobileBrowser()

export default {
  isMobile
};