// NOTAS

// INSTALANDO PAQUETES

// PROYECTO
// Producción:
// npm install [paquete] --save
// npm i [paquete] -D

// Desarrollo:
// npm install [paquete] --save-dev
// npm i [paquete] -D

// Si no ponemos nada después del paquete por defecto se guarda para producción

// GLOBAL
// Para instalar un paquete de manera global (en caso de error usar sudo)
// npm install -g [paquete]
// Para saber los recursos que están instalados de forma global
// npm list -g --depth 0

// OPCIONAL
// npm install [paquete] -O

// SIMULAR
// npm install [paquete] --dry-run

// FORZAR
// npm install [paquete] -f

// EN CASO DE MODIFICAR EL PACKAGE.JSON
// npm install (para actualizar)

// INSTALAR UNA VERSIÓN ESPECÍFICA
// npm install [paquete]@[versión]



// ACTUALIZAR PAQUETES

// Revisar que paquetes disponen de nuevas versiones
// npm outdate
// Para ver un output más detallado
// npm outdate --dd

// Actualizar los paquetes que no están en la ultima versión
// npm update

// Actualizar un paquete especifico
// npm install [paquete]@latest



// ELIMINAR PAQUETES

// Eliminar un paquete de node_modules y del archivo package.json
// npm uninstall [paquete]

// Desinstalar un paquete de todo node_modules pero no del archivo package.json
// npm uninstall [paquete] --no-save