## EAS

Expo Application Services (EAS) is a suite of services provided by Expo to help developers build, deploy, and manage their React Native applications. EAS includes several key services:

1. **EAS Build**: A cloud-based service for building React Native apps for iOS and Android.
2. **EAS Submit**: A service to automate the submission of your app to the Apple App Store and Google Play Store.
3. **EAS Update**: A service to deliver over-the-air (OTA) updates to your app without needing to go through the app store review process.
4. **EAS Metadata**: A service to manage and update your app store metadata.

### EAS Build

EAS Build is a cloud-based service provided by Expo that simplifies the process of building and deploying React Native apps. [EAS Build](https://docs.expo.dev/build/introduction/)

First, make sure you are logged into your Expo Account:

```bash
eas login
```

Second, make sure you have configured the project in EAS:

```bash
eas build:configure
```

Next, run the build with the corresponding `--profile` and `--platform` flags. For example, this command would do a `development` build (designated in the eas.json) for the `ios` platform:

```bash
eas build --profile development --platform ios
```

### Common Errors

1. Pod install does not work and returns:

```
Invalid `hermes-engine.podspec` file: undefined method `visionos' for #<Pod::Specification name="hermes-engine/Pre-built">.
```

Solution: https://stackoverflow.com/questions/78874314/visionos-method-in-hermes-engines-fails-the-pod-install
