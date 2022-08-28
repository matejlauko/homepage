import { createUI } from '@matejlauko/ui'
import theme from '../src/theme'

createUI(theme)

import * as UIPreview from '@matejlauko/ui/preview'

export default UIPreview.default

export const Provider = UIPreview.Provider
export const createTheme = UIPreview.createTheme

// /**
//  * @type {import('@duotone/react').ComponentsConfig}
//  */
// const components = {
//   Button: {
//     render: (props) => (
//       <Button {...props} tone="accent">
//         Button
//       </Button>
//     ),
//     variants: {
//       Variant: {
//         prop: 'variant',
//         options: ['primary', 'secondary', 'tertiary'],
//       },
//       Size: { prop: 'size', options: ['sm', 'md', 'lg'] },
//       ['Primary Tone']: {
//         prop: 'tone',
//         options: [
//           {
//             name: 'accent',
//             render: () => (
//               <Button variant="primary" tone="accent">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'confirm',
//             render: () => (
//               <Button variant="primary" tone="confirm">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'destroy',
//             render: () => (
//               <Button variant="primary" tone="destroy">
//                 Button
//               </Button>
//             ),
//           },
//         ],
//       },
//       ['Secondary Tone']: {
//         prop: 'tone',
//         options: [
//           {
//             name: 'neutral',
//             render: () => (
//               <Button variant="secondary" tone="neutral">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'subtle',
//             render: () => (
//               <Button variant="secondary" tone="subtle">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'accent',
//             render: () => (
//               <Button variant="secondary" tone="accent">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'confirm',
//             render: () => (
//               <Button variant="secondary" tone="confirm">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'destroy',
//             render: () => (
//               <Button variant="secondary" tone="destroy">
//                 Button
//               </Button>
//             ),
//           },
//         ],
//       },
//       ['Tertiary Tone']: {
//         prop: 'tone',
//         options: [
//           {
//             name: 'neutral',
//             render: () => (
//               <Button variant="tertiary" tone="neutral">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'subtle',
//             render: () => (
//               <Button variant="tertiary" tone="subtle">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'accent',
//             render: () => (
//               <Button variant="tertiary" tone="accent">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'confirm',
//             render: () => (
//               <Button variant="tertiary" tone="confirm">
//                 Button
//               </Button>
//             ),
//           },
//           {
//             name: 'destroy',
//             render: () => (
//               <Button variant="tertiary" tone="destroy">
//                 Button
//               </Button>
//             ),
//           },
//         ],
//       },
//     },
//   },
// }

// export default components

// /**
//  * @type {import('@duotone/react').Provider}
//  */
// export const Provider = ({ children }) => {
//   React.useEffect(() => {
//     globalCss(resetStyles)()
//     globalCss(globalStyles)()
//   }, [])

//   return <UIProvider>{children}</UIProvider>
// }

// /**
//  * @type {import('@duotone/react').CreateTheme}
//  */
// export const createTheme = (_tokens, themeStore) => {
//   console.log({ _tokens, tts: themeStore.tokens })
//   return UICreateTheme(merge({}, themeStore.tokens, _tokens))
// }
