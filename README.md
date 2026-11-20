# Tienda de clase · Proyecto Final

Aplicación de e-commerce simple hecha con **React + Vite + React Router** y **Firebase Firestore** como backend. Cumple con los requisitos de la consigna: frontend, backend, despliegue en la nube y repositorio en GitHub.

## Funcionalidades

- Catálogo de productos con filtro por categoría (lectura desde Firestore).
- Detalle de producto por ruta `/productos/:id`.
- Carrito con Context API, cantidades y persistencia en `localStorage`.
- Favoritos por producto con `useState`.
- Formulario de pedido validado que **escribe** un documento en la colección `orders` de Firestore.
- Directorio del equipo cargado con `fetch` desde `/data/equipo.json` (práctica de la clase 5).
- Modo demostración: si no hay credenciales de Firebase, la app usa productos locales y guarda los pedidos en `localStorage`, así que siempre se puede probar.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173`.

Otros comandos:

```bash
npm run build     # build de producción en dist/
npm run preview   # previsualizar el build
npm run lint      # oxlint
```

## Conectar Firebase

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Agregar una app web y copiar los valores de configuración.
3. Crear `.env` en la raíz del proyecto a partir de `.env.example` y completar las variables `VITE_FIREBASE_*`.
4. En **Firestore Database**, crear la base de datos y cargar los productos:
   - Crear la colección `products`.
   - Usar “Importar documentos” o agregar manualmente los 6 documentos con los campos de [`public/data/products.json`](public/data/products.json) (el `id` de cada documento debe ser `p1`, `p2`, ... `p6`).
   - Crear también la colección `orders` (vacía, se llena sola con los pedidos).
5. En **Reglas de Firestore**, pegar el contenido de [`firestore.rules`](firestore.rules) y publicar.
6. Reiniciar `npm run dev`. En el footer debe decir “Conectado a Firebase Firestore”.

> Las claves de configuración web de Firebase son públicas y se suben al front con `VITE_`. Aun así, `.env` está en `.gitignore` para no versionar datos locales. La seguridad real se define con las reglas de Firestore.

## Despliegue

- **Frontend**: importar el repo en [Vercel](https://vercel.com/) o [Netlify](https://netlify.com/). Vite se detecta solo. Cargar las mismas variables `VITE_FIREBASE_*` en la configuración del sitio. Si usás Netlify, agregar un redirect de `/\*` a `/index.html` con status 200 para que funcionen las rutas.
- **Backend**: Firestore ya está en la nube, no hace falta desplegar servidor.
- **GitHub**: subir el proyecto (sin `node_modules`, `dist` ni `.env`).

## Entrega

Crear `GrupoX.txt` (X = número de grupo) con:

```text
Integrantes:
- Nombre y apellido 1
- Nombre y apellido 2

Repositorio GitHub: https://github.com/...
Frontend desplegado: https://...
```

Subir ese archivo a la tarea del Campus antes del **30/11/2026 23:59**.

## Estructura

```text
src/
├── App.jsx                         # rutas y layout general
├── App.css                         # estilos
├── main.jsx                        # BrowserRouter + CartProvider
├── data/products.js                # productos semilla y formateo de precios
├── lib/firebase.js                 # inicialización de Firebase
├── services/
│   ├── products.js                 # getProductos / getProductoPorId
│   └── orders.js                   # crearPedido
├── context/                        # CartContext, CartProvider y useCart
└── components/
    ├── Header/  Nav/  Footer/
    ├── Directorio/  TarjetaContacto/
    ├── Item/  ItemList/  ItemListContainer/
    ├── ItemDetail/  ItemDetailContainer/
    ├── Cart/
    └── Form/                       # FormContainer, FormUI, validateForm
public/
├── data/products.json              # semilla para Firestore
├── data/equipo.json                # datos del directorio
└── favicon.svg
firestore.rules                     # reglas de acceso
.env.example                        # plantilla de credenciales
```
