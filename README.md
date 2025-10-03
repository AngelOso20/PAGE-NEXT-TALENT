# 🚀 Next Talent Solutions - Página Web

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?style=for-the-badge&logo=typescript)
  ![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?style=for-the-badge&logo=css3)

  ### 💼 Soluciones en talento humano y tecnología al alcance de cualquier negocio

  [Demo en vivo](#) | [Documentación](#estructura-del-proyecto) | [Contribuir](#contribuciones)

</div>

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Comandos Disponibles](#-comandos-disponibles)
- [Sistema Responsive](#-sistema-responsive)
- [Colores del Diseño](#-colores-del-diseño)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

---

## ✨ Características

✅ **Diseño Pixel Perfect** - Implementación exacta del mockup proporcionado  
✅ **Responsive Design** - Adaptación fluida a todos los dispositivos  
✅ **Optimización de Rendimiento** - Next.js Image y optimización automática  
✅ **Type Safety** - TypeScript para mayor seguridad en el desarrollo  
✅ **CSS Modules** - Estilos aislados y sin conflictos  
✅ **Fuente Personalizada** - Adobe Fonts (FinalSix) integrada  
✅ **Build Optimizado** - Producción lista para deploy  

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| **Next.js** | 14.2.5 | Framework React con App Router |
| **React** | 18.3.1 | Librería UI de componentes |
| **TypeScript** | 5.3.3 | Superset tipado de JavaScript |
| **CSS Modules** | - | Estilos modulares y aislados |
| **Adobe Fonts** | FinalSix | Tipografía personalizada |

### 🎯 ¿Por qué estas tecnologías?

- **Next.js 14**: Última versión estable con App Router, mejor rendimiento y SEO
- **React 18**: Compatibilidad total con Next.js 14 y características modernas
- **TypeScript**: Type safety para prevenir errores en tiempo de desarrollo
- **CSS Modules**: Evita conflictos de estilos y mejora el mantenimiento

---

## 📦 Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm o yarn

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/AngelOso20/PAGE-NEXT-TALENT.git

# Navegar al directorio
cd PAGE-NEXT-TALENT

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 📁 Estructura del Proyecto

```
PAGE-NEXT-TALENT/
├── 📂 public/                    # Assets estáticos
│   └── 📂 images/               # Imágenes, iconos, botones
│       ├── 📂 Iconos/SVG/       # Iconos SVG
│       └── 📂 Buttons/          # Botones SVG
│
├── 📂 src/                      # Código fuente
│   ├── 📂 app/                  # App Router de Next.js
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   └── globals.css         # Estilos globales
│   │
│   └── 📂 components/           # Componentes reutilizables
│       └── 📂 NavMenu/          # Componente de navegación
│           ├── NavMenu.tsx
│           └── NavMenu.module.css
│
├── 📄 package.json              # Dependencias del proyecto
├── 📄 tsconfig.json             # Configuración TypeScript
├── 📄 next.config.js            # Configuración Next.js
└── 📄 README.md                 # Este archivo
```

---

## 🎮 Comandos Disponibles

```bash
# 🔥 Desarrollo
npm run dev          # Inicia servidor en modo desarrollo (http://localhost:3000)

# 🏗️ Producción
npm run build        # Crea build optimizado para producción
npm run start        # Inicia servidor de producción

# 🔍 Linting
npm run lint         # Ejecuta ESLint para validar código
```

---

## 📱 Sistema Responsive

El diseño se adapta perfectamente a diferentes tamaños de pantalla:

### 🖥️ Desktop (1920px - base)
- Diseño exacto del mockup con valores absolutos
- Todos los elementos en posiciones pixel-perfect

### 💻 Laptop (1400px - 1920px)
- Escalado proporcional usando porcentajes (vw)
- Mantiene proporciones del diseño original

### 📱 Tablet (1024px - 1400px)
- Layout horizontal compacto
- Elementos ajustados para mejor visualización

### 📱 Mobile (<1024px)
- Layout vertical adaptativo
- Menú centrado y apilado
- Botones optimizados para touch

---

## 🎨 Colores del Diseño

```css
/* Paleta de colores principal */
--color-background: #F3F7F9;      /* Fondo general */
--color-nav-background: #FFFFFF;   /* Fondo del NavMenu */
--color-text-primary: #1A1818;     /* Texto principal */
--color-button-primary: #27A49F;   /* Botón "HABLEMOS" */
--color-button-secondary: #FB8C05; /* Botón Usuario */
--color-white: #FFFFFF;            /* Blanco */
```

---

## 📐 NavMenu - Especificaciones Técnicas

### Dimensiones Exactas

| Elemento | Posición (top, left) | Tamaño (width, height) | Color |
|----------|---------------------|----------------------|-------|
| **NavMenu Container** | 0px, 0px | 100%, 113px | #FFFFFF |
| **Logo** | 28px, 50px | 205px, 56px | - |
| **Nosotros** | 45px, 1105px | 74px, 23px | #1A1818 |
| **Servicios** | 45px, 1208px | 73px, 23px | #1A1818 |
| **Planes** | 45px, 1309px | 56px, 23px | #1A1818 |
| **Blog y Eventos** | 45px, 1394px | 120px, 23px | #1A1818 |
| **Contacto** | 45px, 1542px | 77px, 23px | #1A1818 |
| **Botón HABLEMOS** | 37px, 1648px | 162px, 40px | #27A49F |
| **Botón Usuario** | 37px, 1838px | 40px, 40px | #FB8C05 |

### Tipografía

```css
font-family: 'FinalSix', sans-serif;
font-weight: 500;           /* Medium para menú */
font-weight: 800;           /* Extra Bold para botón */
font-size: 16px;            /* Items de menú */
font-size: 17px;            /* Botón HABLEMOS */
line-height: 23px;
letter-spacing: 0px;
```

---

## 🚀 Build & Deploy

### Build para Producción

```bash
npm run build
```

El build genera:
- ✅ Optimización automática de imágenes
- ✅ Minificación de CSS y JavaScript
- ✅ Static Site Generation (SSG)
- ✅ Code splitting automático

### Deploy

Compatible con múltiples plataformas:

- **Vercel** (Recomendado) - Deploy automático desde GitHub
- **Netlify** - Configuración simple
- **AWS Amplify** - Escalabilidad empresarial
- **Digital Ocean** - Control total del servidor

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. 🍴 Fork el proyecto
2. 🔨 Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🎉 Abre un Pull Request

### Convenciones de Commits

Usamos commits semánticos:

- `feat:` - Nueva característica
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (no afectan el código)
- `refactor:` - Refactorización de código
- `test:` - Añadir o modificar tests
- `chore:` - Tareas de mantenimiento

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**AngelOso20**

- GitHub: [@AngelOso20](https://github.com/AngelOso20)

---

## 🙏 Agradecimientos

- Next.js Team por el increíble framework
- Adobe Fonts por la fuente FinalSix
- La comunidad de React por el soporte continuo

---

<div align="center">
  
  ### ⭐ Si este proyecto te fue útil, considera darle una estrella

  **Hecho con ❤️ y ☕ por AngelOso20**

</div>
