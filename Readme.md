### Scope of the App

Make a iOS/Android verison of my portefolio-webapp from 2022, a mockup og www.cvr.dk: https://cvr-krme-v02.netlify.app/. As extra functionality, add translations (da + en) and home-made authentication with expo-sqlite. The authentication in the webapp acccept any combination as username and password.

### Purpose of the project

To understand the basics of Expo and react-native.

### Release Candidate 0.1

- Release v. 0.1 does not have dynamic paging for the company results, like the webapp above have. This will be included in Release v. 0.2.
- Releast v. 0.2 does not include styling. This is probably done using https://tamagui.dev/docs/components/button.

## Instructions

1. In rooter folder: npm i
2. In api golder: npm i
3. In api folder: npm run dev
4. In root folder: npm start
   npm start
5. use Expo Go on your phone or Xcode (macOS) / Android Studio on your laptop.

## Todo

1. Refactor company into mongoose data
2. Refactor AuthenticationContext ind i mongoose
3. Fix dynamic routing
4. Skriv det i typescript

## Research (not functionality)

1. I have a lot of Re-renders. Check for useCallback.
2. I have some backend stuff in my frontend ? The 3 utils. Write them into backend?
3. Should mongoose setup be changed? One server file? Check how to split it.
4. Is it good design with SafeAreaViewWrapper? Maybe remove the Scrollview as it is not generic for all screen/components.
5. Fix @ts-ignores
