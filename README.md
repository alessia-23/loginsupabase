# 🎌 Anime App - Ionic Angular

Aplicación móvil desarrollada con Ionic Angular y Supabase Authentication.

La aplicación permite a los usuarios registrarse, iniciar sesión, explorar animes dinámicamente desde una API externa, visualizar detalles de cada anime y utilizar la cámara del dispositivo para guardar fotografías localmente.

---

# 👩‍💻 Estudiante

**Alessia Pérez Palacios**

---

# 📱 Características principales

✅ Registro de usuarios  
✅ Inicio de sesión con Supabase  
✅ Cierre de sesión  
✅ Navegación mediante Tabs  
✅ Consumo de API externa  
✅ Catálogo dinámico de animes  
✅ Búsqueda de animes  
✅ Página detalle  
✅ Cámara con Capacitor  
✅ Almacenamiento local de imágenes  
✅ Splash Screen personalizado  
✅ Ícono personalizado  

---

# 🌐 API utilizada

## Jikan API

Endpoint principal:

```bash
https://api.jikan.moe/v4/top/anime
```

Endpoint de búsqueda:

```bash
https://api.jikan.moe/v4/anime?q=
```

---

# 🛠️ Tecnologías utilizadas

- Ionic Angular
- TypeScript
- HTML
- SCSS
- Capacitor
- Supabase Authentication
- Angular Router
- Capacitor Camera
- Capacitor Filesystem
- Capacitor Preferences
- Jikan API

---

# 🔐 Autenticación

La aplicación implementa autenticación utilizando Supabase.

Funcionalidades:

- Registro de usuarios
- Inicio de sesión
- Validación de credenciales
- Cierre de sesión
- Persistencia de sesión
- Protección de rutas internas

---

# 📷 Cámara y almacenamiento local

La aplicación utiliza Capacitor Camera para:

- Capturar fotografías
- Guardar imágenes localmente
- Mostrar imágenes en galería
- Mantener persistencia usando Preferences

---

# 📂 Estructura de páginas

| Página | Función |
|---|---|
| Login | Inicio de sesión |
| Registro | Registro de usuarios |
| Home | Página principal |
| Catálogo | Listado de animes |
| Detalle/ Dentro de catálogo | Información completa |
| Cámara | Captura y galería |
| Perfil | Información del usuario |

---

# 🚀 Instalación

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar aplicación

```bash
ionic serve
```

---

# 🤖 Ejecución Android

## Compilar proyecto

```bash
ionic build
```

## Sincronizar Capacitor

```bash
npx cap sync android
```

## Abrir Android Studio

```bash
npx cap open android
```

---

# ⚙️ Configuración de variables de entorno

Crear archivo:

```bash
src/environments/environment.ts
```

Agregar:

```ts
export const environment = {
  production: false,
  supabaseUrl: 'TU_SUPABASE_URL',
  supabaseKey: 'TU_SUPABASE_KEY'
};
```

---
# 📸 Capturas de la Aplicación

| Pantalla | Vista |
|---|---|
| 🔐 Login | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/56d2c726-42d5-452d-bbd5-0ab903d98cd9" />
|
| 📝 Registro | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/77927aa1-e84e-4f2c-9640-2206493aa09e" />
 |
| 🎌 Home | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/293dbb30-7ab7-41c6-850f-a088baf58489" />
 |
| 🎌 Catálogo de Animes | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/c6e2549c-cf44-4b6c-b869-2674c28c600e" />
 |
| 🔍 Búsqueda de Anime | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/496ea104-c376-49b8-83f3-511003c0f53f" />
 |
| 📄 Detalle de Anime | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/03dd56a4-6c5e-4d09-ba11-e3abcb6fe3ac" />
 |
 | 📷 Cámara |<img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/43e0b683-d86e-49da-a880-9ed60ad4924d" />

 |
| 📷 Cámara y Galería |<img width="424" height="879" alt="image" src="https://github.com/user-attachments/assets/2b251943-3f1c-404d-8e40-87ae2111508c" />
 |
 
| 👤 Perfil | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/d3a9fffb-39fe-4763-ba36-cfdfd1d3bd4f" />
 |
| 🚀 Splash Screen | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/f129ffc8-6912-420c-abaa-2a56f89df223" />
|
| 📱 Ícono de la Aplicación | <img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/779ed849-28a8-4492-8391-045f73545dfd" />
<img width="698" height="1600" alt="image" src="https://github.com/user-attachments/assets/82c3d036-3f10-44a3-824b-121646ad23b6" />
 |

---

# 🧠 Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó inteligencia artificial como apoyo para:

- Resolución de errores
- Generación de estructuras base
- Explicación de conceptos
- Mejora visual de componentes
- Implementación de funcionalidades Ionic y Capacitor
- Generación de README
---

# 💡 Prompts utilizados

- ¿Cómo consumir una API en Ionic Angular?
- ¿Cómo usar Supabase Authentication?
- ¿Cómo implementar login y registro?
- ¿Cómo usar Tabs en Ionic?
- ¿Cómo usar Capacitor Camera?
- ¿Cómo guardar imágenes localmente?
- ¿Cómo consumir Jikan API?
- ¿Cómo crear una página detalle?
- ¿Cómo generar APK Android?
- ¿Cómo implementar Splash Screen e ícono personalizado?
- Ayúdame a generar un Readme
---

# 📱 Resultado final

Aplicación móvil funcional desarrollada con Ionic Angular, enfocada en autenticación, consumo de APIs, navegación móvil y uso de características nativas del dispositivo.
