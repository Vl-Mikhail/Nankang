# iNankang (iOS и Android)

<h4>Главный экран</h4>
<p align="left">
  <img src="https://firebasestorage.googleapis.com/v0/b/nankang-78d26.appspot.com/o/git%2F1.png?alt=media&token=27a03fd5-0099-4003-8dab-80b22ae518cf">
</p>

<h4>Выбор значения для поиска</h4>
<p align="left">
  <img src="https://firebasestorage.googleapis.com/v0/b/nankang-78d26.appspot.com/o/git%2F2.png?alt=media&token=3ce18270-63a6-4889-970a-2a6f5784bd22">
</p>

<h4>Список моделий</h4>
<p align="left">
  <img src="https://firebasestorage.googleapis.com/v0/b/nankang-78d26.appspot.com/o/git%2F3.png?alt=media&token=a8840a50-bf3f-4206-813c-2d175bde01ef">
</p>

<h4>Описание товара</h4>
<p align="left">
  <img src="https://firebasestorage.googleapis.com/v0/b/nankang-78d26.appspot.com/o/git%2F4.png?alt=media&token=67661583-0af9-43a3-97b5-858c816b4aeb">
</p>



В данном проекте использовались технологии:
<ol>
    <li>React Native</li>
    <li>Redux</li>
    <li>Firebase</li>
</ol>

Среда разработки WebStorm.

<h4>Заметки</h4>

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


**How to add icons to React Native app**

for IOS:
you should set AppIcon in Images.xcassets.
you should upload 9 different size icons 29pt 29pt*2 29pt*3 40pt*2 40pt*3 57pt 57pt*2 60pt*2 60pt*3.
picture for setting Images.xcassets

for Android:
put ic_launcher.png to folder [PrjDir]/android/app/src/main/res/mipmap-*.
72*72 ic_launcher.png to mipmap-hdpi.
48*48 ic_launcher.png to mipmap-mdpi.
96*96 ic_launcher.png to mipmap-xhdpi.
144*144 ic_launcher.png to mipmap-xxhdpi.