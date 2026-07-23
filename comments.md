Comentario sobre NItroModules en Ios: 
No estamos usando el bridge legacy de React Native. Este módulo está montado como TurboModule, y en iOS la capa en Objective-C++ solo se usa como wrapper de integración. Si se quiere evitar Objective-C por completo, la alternativa sería Nitro Modules, pero eso ya implica otra infraestructura distinta a la oficial de Meta.

aún así, ya estamos utilizando la nueva arquitectura de React Ntive con TurboModules