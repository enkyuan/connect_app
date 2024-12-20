# Gather Connect App

[//]: # (TODO: document all of this code into a wiki prior to deployment)

## about

this is the codebase for the Gather Connect app

## available on
<p id="badges" align="start">
  <a href="https://www.android.com/"><img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" /></a>
  <a href="https://www.apple.com/ios/ios-17/"><img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" /></a>
</>

## built using
<p id="badges" align="start">
  <a href="https://bun.sh/"><img src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="https://expo.dev/"><img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" /></a>
  <a href="https://www.sqlite.org/"><img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" /></a>
  <a href="https://cloud.google.com/"><img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"></a>
  <a href="https://stripe.com/"><img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe" /></a>
</>

## hosted on
<p id="badges" align="start">
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" /></a>
</>

## contributing

### setup

```
git clone https://github.com/enkyuan/connect_app.git
cd connect_app
bun i
```

### installing dependencies

```
bun expo install <package-name>
npx pod-install   # for native modules
```
### running

```
docker compose up -d
bun run ios
```

### resetting

```
bun run start -c
docker stop pb
```

### git

```
git pull
git add .
git commit -m "message"
git push
```

### env variables

* variables used in testing are the pocketbase endpoint & merchant id for stripe
* `http://localhost:8090` is the default url for pocketbase
* when adding variables, name them according the following convention, i.e.,
  `EXPO_PUBLIC_VARIABLE_NAME=<value>`
* use `process.env.EXPO_PUBLIC_VARIABLE_NAME` when reading a variable
