# Test Apps for React Native Quick Crypto
This is a set of test apps for the React Native Quick Crypto (RNQC) library.  These are the commands used to create the apps and test RNQC.

## CRNA
@react-native-community/cli (formerly create react native app)

### crna_0_71_19

From the root of this repo:
```bash
# create the app
bunx @react-native-community/cli init crna_0_71_19 --version 0.71.19 --install-pods true --skip-git-init true --directory apps/crna_0_71_19
```

#### `ios`

> TODO

#### `android`
* Needs Java 17 or lower to build `android`.  For my setup, this meant running
```bash
jenv local 17
```

* Start `android` emulator, make sure `adb` is in the path.

```bash
# go to the app directory
cd apps/crna_0_71_19

# start the app
bun start
# `a` for android - should see the app in the emulator
# ctrl-c to stop the app

# install RNQC
bun add react-native-quick-crypto@0.7.5
#or a specific branch
bun add github:margelo/react-native-quick-crypto#0.x

# start the app again
bun start
# `a` for android - should see the app in the emulator

# copy the App.tsx file with RNQC code from the src directory
cp ../../src/crna/App.tsx .
# if you see a private/public key combo displayed in the app, then you are good to go 💪 🚀
```


## EXPO

### 51

> note: work-in-progress
```bash
bunx create expo-app@latest -e with-new-arch
cd ${my-expo-app}
bun add react-native-quick-crypto@1.0.0-beta.3
bun pm trust --all
bun run ios (to get development build)
bun start
```
