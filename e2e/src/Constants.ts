export const WALLET_PASSWORD = 'asdasdasd';

export const Browsers = {
  SAFARI: 'com.apple.mobilesafari',
  CHROME: 'com.android.chrome',
};

export const NATIVE_OS_APPS = {
  ANDROID: {
    SETTINGS: 'com.android.settings',
  },
};

export const Platforms = {
  ANDROID: 'ANDROID',
  IOS: 'IOS',
};

export const PLATFORM = driver.isIOS ? Platforms.IOS : Platforms.ANDROID;

export const SRP =
  process.env.SRP ??
  'test test test test test test test test test test test test';

export const FIXTURE_SERVER_PORT = 12345;

export const FIXTURE_SERVER_URL = `http://localhost:12345/state.json`;

export const BROWSER_BUNDLE_ID = driver.isIOS
  ? Browsers.SAFARI
  : Browsers.CHROME;

// This comes from the config file, it'll never be undefined otherwise there are no tests to run
export const METAMASK_BUNDLE_ID = process.env.BUNDLE_ID as string;

export const METAMASK_APP_NAME_ANDROID =
  METAMASK_BUNDLE_ID === 'io.metamask.qa' ? 'MetaMask-QA' : 'MetaMask';

export const WDIO_IOS_CLASS_CHAIN = '-ios class chain:';
export const WDIO_IOS_PREDICATE_STRING = '-ios predicate string:';
export const WDIO_ANDROID_UI_AUTOMATOR = 'android=';
export const WDIO_XPATH = '';
export const WDIO_ACCESSIBILITY_ID = '~';
export const WDIO_RESOURCE_ID = 'id:';
