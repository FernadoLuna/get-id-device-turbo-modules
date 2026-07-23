Este es un proyecto de [React Native](https://reactnative.dev), creado con [@react-native-community/cli](https://github.com/react-native-community/cli).

# Guía de inicio

> Nota: Antes de continuar, asegúrate de haber completado la guía de configuración del entorno:
> [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment)

## Versión de Node.js

Este proyecto requiere Node.js >= 22.11.0 (ver engines en package.json).

Recomendado con nvm:

```sh
nvm install
nvm use
```

Si Metro se cae o en el simulador aparece "No script URL provided", confirma que estás usando Node 22.x antes de iniciar Metro y iOS.

## Paso 1: Iniciar Metro

Metro es el empaquetador JavaScript de React Native. Inícialo desde la raíz del proyecto:

```sh
# Con npm
npm start

# O con Yarn
yarn start
```

## Paso 2: Compilar y ejecutar la app

Con Metro ejecutándose, abre otra terminal en la raíz del proyecto y corre uno de estos comandos.

### Android

```sh
# Con npm
npm run android

# O con Yarn
yarn android
```

### iOS

En iOS recuerda instalar dependencias de CocoaPods (solo la primera vez o cuando cambien dependencias nativas).

Primera vez:

```sh
bundle install
```

Después (y cada vez que cambien dependencias nativas):

```sh
bundle exec pod install
```

Más información:
[CocoaPods Getting Started](https://guides.cocoapods.org/using/getting-started.html)

```sh
# Con npm
npm run ios

# O con Yarn
yarn ios
```

Si todo está correcto, verás la app en el emulador de Android, el simulador de iOS o un dispositivo físico conectado.

También puedes compilar directamente desde Android Studio o Xcode.

## Paso 3: Modificar la app

Abre App.tsx y haz cambios. Al guardar, la app se actualiza automáticamente gracias a [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

Para forzar una recarga completa:

- Android: presiona R dos veces o usa "Reload" desde el Dev Menu (Ctrl+M en Windows/Linux, Cmd+M en macOS).
- iOS: presiona R en el simulador.

## Solución de problemas

Si tienes problemas para levantar el proyecto, revisa:
[Troubleshooting](https://reactnative.dev/docs/troubleshooting)

## Más recursos

- [Sitio oficial de React Native](https://reactnative.dev)
- [Getting Started](https://reactnative.dev/docs/environment-setup)
- [Learn the Basics](https://reactnative.dev/docs/getting-started)
- [Blog de React Native](https://reactnative.dev/blog)
- [Repositorio de React Native](https://github.com/facebook/react-native)
