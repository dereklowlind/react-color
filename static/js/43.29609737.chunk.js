(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[43],{474:function(e,n,s){"use strict";s.r(n),n.default="React Color Shade Slider\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)\n\nShadeSlider Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n![react-color-shade-slider](https://user-images.githubusercontent.com/1680273/125951397-89e90c05-1de2-4da7-81ed-4b77980482a0.png)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-shade-slider\n```\n\n## Usage\n\n```js\nimport ShadeSlider from '@uiw/react-color-shade-slider';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });\n  return (\n    <ShadeSlider\n      hsva={hsva}\n      onChange={(newShade) => {\n        setHsva({ ...hsva, ...newShade });\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport { AlphaProps } from '@uiw/react-color-alpha';\n\ninterface ShadeSliderProps extends Omit<AlphaProps, 'onChange'> {\n  onChange?: (newShade: { v: number; s: number }) => void;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=43.29609737.chunk.js.map