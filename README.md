# SpinChallenge

## Requisitos

- Node.js 22.21.1 (usar `.nvmrc`)
- Yarn 1.x
- Xcode + CocoaPods (iOS)
- Android Studio + SDK (Android)

## Instalacion

```sh
nvm install
nvm use
yarn install
```

## iOS

```sh
cd ios
bundle install
bundle exec pod install
cd ..
```

Terminal 1:

```sh
yarn start --reset-cache
```

Terminal 2:

```sh
yarn ios
```

## Android

Terminal 1:

```sh
yarn start --reset-cache
```

Terminal 2:

```sh
yarn android
```

## Tests

```sh
yarn test --runInBand
```

## Nota rapida

Si aparece "No script URL provided", verifica:

1. Metro corriendo en `localhost:8081`.
2. Estar usando la version de Node de `.nvmrc`.
