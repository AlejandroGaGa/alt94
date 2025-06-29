# Alt94 - Plataforma Inmobiliaria

## 📋 Descripción

Alt94 es una aplicación web moderna de inmobiliaria desarrollada con **Next.js 15**, que permite a los usuarios explorar, filtrar y descubrir propiedades en venta. La aplicación incluye un sistema inteligente de recomendaciones basado en vectores y similitud coseno para sugerir propiedades similares.
### Video de explicación
https://drive.google.com/file/d/1kkI3-bXlZUMn_aPILAnylyPVMV1EaYV8/view?usp=sharing

### ✨ Características Principales

- **🏠 Catálogo de Propiedades**: Visualización de casas y departamentos con información detallada
- **🔍 Filtros Avanzados**: Búsqueda por ciudad, tipo de propiedad, precio y ambientes
- **🤖 Sistema de Recomendaciones**: Motor de recomendación inteligente usando vectores y similitud coseno
- **❤️ Favoritos**: Sistema para guardar y gestionar propiedades favoritas
- **📱 Diseño Responsivo**: Interfaz moderna y adaptativa con Tailwind CSS
- **⚡ Rendimiento Optimizado**: Utiliza las capacidades de servidor y cliente de Next.js

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilos**: Tailwind CSS 4
- **Iconos**: Heroicons, Headless UI
- **Animaciones**: AOS (Animate On Scroll)
- **Backend**: API Routes de Next.js
- **Base de Datos**: JSON local (simulando base de datos)

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone git@github.com:AlejandroGaGa/alt94.git
   cd alt94
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo con Turbopack
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de código

## 📁 Estructura del Proyecto

```
alt94/
├── app/                          # App Router de Next.js 15
│   ├── api/                      # API Routes (Backend)
│   │   ├── data/                 # Base de datos JSON
│   │   └── ownerships/           # Endpoints de propiedades
│   ├── components/               # Componentes React
│   │   ├── Home/                 # Componentes de la página principal
│   │   ├── OwnerShip/            # Componentes de propiedades
│   │   ├── Layouts/              # Navbar y Footer
│   │   └── Filters/              # Componentes de filtros
│   ├── context/                  # Context API para favoritos
│   ├── interfaces/               # Tipos TypeScript
│   ├── utils/                    # Utilidades y motor de recomendación
│   └── libs/                     # Librerías y servicios
├── public/                       # Archivos estáticos
└── package.json
```

## 🔧 Funcionalidades Técnicas

### Backend (Server-Side)
- **API Routes**: Endpoints para obtener propiedades y recomendaciones
- **Motor de Recomendación**: Algoritmo de similitud coseno y vectores
- **Filtrado Dinámico**: Búsqueda y filtrado de propiedades
- **Paginación**: Gestión eficiente de grandes volúmenes de datos

### Frontend (Client-Side)
- **Componentes Modulares**: Arquitectura reutilizable
- **Context API**: Gestión de estado global para favoritos
- **Animaciones**: Efectos visuales con AOS
- **Responsive Design**: Adaptación a diferentes dispositivos

### Sistema de Recomendaciones
El motor de recomendación utiliza:
- **Vectores de Características**: Normalización de propiedades (precio, ambientes, metros)
- **Similitud Coseno**: Cálculo de similitud entre vectores
- **Ponderación Inteligente**: Combinación de similitud vectorial y ponderada
- **Filtrado por Umbral**: Recomendaciones con similitud mínima

## 🎯 Páginas Principales

- **Home** (`/`): Página principal con banner y información
- **Propiedades** (`/ownership`): Catálogo con filtros y paginación
- **Favoritos** (`/favorites`): Propiedades guardadas por el usuario
- **Acerca de** (`/about`): Información de la empresa
- **Contacto** (`/contact`): Formulario de contacto

## 🔄 Flujo de Datos

1. **Carga Inicial**: Los datos se cargan desde `db.json` en el servidor
2. **Filtrado**: Los filtros se aplican tanto en cliente como servidor
3. **Recomendaciones**: Se calculan en tiempo real usando el motor de recomendación
4. **Estado**: Los favoritos se mantienen en el contexto de React

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Otros Proveedores
La aplicación es compatible con cualquier proveedor que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Next.js 15**
