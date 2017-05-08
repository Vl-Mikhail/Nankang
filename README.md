You will have to create a key to sign the apk. Use below to create your key:

keytool -genkey -v -keystore my-app-key.keystore -alias my-app-alias -keyalg RSA -keysize 2048 -validity 10000
Use a password when prompted

Once the key is generated, use it to generate the installable build:

react-native bundle --platform android --dev false --entry-file index.android.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res/
Generate the build using gradle

cd android && ./gradlew assembleRelease
Upload the APK to your phone. The -r flag will replace the existing app (if it exists)

adb install -r ./app/build/outputs/apk/app-release-unsigned.apk