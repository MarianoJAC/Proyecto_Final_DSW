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
