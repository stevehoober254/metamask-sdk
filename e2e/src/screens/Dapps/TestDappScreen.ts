import { ChainablePromiseElement } from 'webdriverio';

import { Dapp } from '../interfaces/Dapp';
import Gestures from '../../Gestures';
import { getSelectorForPlatform } from '../../Utils';
import { AndroidSelector, IOSSelector } from '../../Selectors';

class TestDappScreen implements Dapp {
  get connectButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(
      getSelectorForPlatform({
        androidSelector: AndroidSelector.by().xpath(
          '//android.widget.Button[@resource-id="connectButton"]',
        ),
        iosSelector: IOSSelector.by().predicateString('label == "Connect"'),
      }),
    );
  }

  get personalSignButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(
      getSelectorForPlatform({
        androidSelector: AndroidSelector.by().xpath(
          '//android.widget.Button[@resource-id="personalSign"]',
        ),
        iosSelector: IOSSelector.by().predicateString('label == "Sign"'),
      }),
    );
  }

  get signTypedDataV3Button(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(
      getSelectorForPlatform({
        androidSelector: AndroidSelector.by().xpath(
          '//android.widget.Button[@resource-id="signTypedDataV3"]',
        ),
        iosSelector: IOSSelector.by().predicateString('label == "Sign"'),
      }),
    );
  }

  get terminateButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(
      getSelectorForPlatform({
        androidSelector: AndroidSelector.by().xpath(
          '//android.widget.Button[@resource-id="terminateButton"]',
        ),
        iosSelector: IOSSelector.by().predicateString('label == "Disconnect"'),
      }),
    );
  }

  async connect(): Promise<void> {
    await this.scrollToConnectButton();
    await (await this.connectButton).click();
  }

  async signTypedDataV3(): Promise<void> {
    await this.scrollToSignTypedDataV3Button();
    await (await this.signTypedDataV3Button).click();
  }

  async personalSign(): Promise<void> {
    await this.scrollToPersonalSignButton();
    await (await this.personalSignButton).click();
  }

  async terminate(): Promise<void> {
    await this.scrollToTerminateButton();
    await (await this.terminateButton).click();
  }

  async scrollToConnectButton(): Promise<void> {
    let isButtonDisplayed = await (await this.connectButton).isDisplayed();

    while (!isButtonDisplayed) {
      await Gestures.swipeByPercentage({ x: 50, y: 90 }, { x: 50, y: 5 });
      isButtonDisplayed = await (await this.connectButton).isDisplayed();
    }
  }

  async scrollToTerminateButton(): Promise<void> {
    let isButtonDisplayed = await (await this.terminateButton).isDisplayed();

    while (!isButtonDisplayed) {
      await Gestures.swipeByPercentage({ x: 50, y: 90 }, { x: 50, y: 5 });
      isButtonDisplayed = await (await this.terminateButton).isDisplayed();
    }
  }

  async scrollToSignTypedDataV3Button(): Promise<void> {
    let isButtonDisplayed = await (
      await this.signTypedDataV3Button
    ).isDisplayed();

    while (!isButtonDisplayed) {
      await Gestures.swipeByPercentage({ x: 50, y: 90 }, { x: 50, y: 5 });
      isButtonDisplayed = await (
        await this.signTypedDataV3Button
      ).isDisplayed();
    }
  }

  async scrollToPersonalSignButton(): Promise<void> {
    let isButtonDisplayed = await (await this.personalSignButton).isDisplayed();

    while (!isButtonDisplayed) {
      await Gestures.swipeByPercentage({ x: 50, y: 90 }, { x: 50, y: 5 });
      isButtonDisplayed = await (await this.personalSignButton).isDisplayed();
    }
  }
}

const testDappScreen = new TestDappScreen();
export default testDappScreen;
