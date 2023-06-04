// import { createUI } from '@matejlauko/ui'
import theme from '../src/theme'

// createUI(theme)

import * as UIPreview from '@matejlauko/ui/preview'
import { ComponentsConfig, StylesConfig } from '@duotone/react'

export const Provider = UIPreview.Provider
export const createTheme = UIPreview.createTheme

const components: ComponentsConfig = {
  Button: UIPreview.default.Button,
  Text: UIPreview.default.Text,
  Heading: UIPreview.default.Heading,
  Badge: UIPreview.default.Badge,
  Button2: UIPreview.default.Button,
  Text2: UIPreview.default.Text,
  Heading2: UIPreview.default.Heading,
  Badge2: UIPreview.default.Badge,
  // Container: UIPreview.default.Container,
  // Center: UIPreview.default.Center,
  // LinkOverlay: UIPreview.default.LinkOverlay,
  // Paragraph: UIPreview.default.Paragraph,
  // HStack: UIPreview.default.Hs
  // LinkBox: UIPreview.default.LinkBox
}

export default components

export const previewStyles: StylesConfig = {
  background: theme.colors.gray2,
  fontColor: theme.colors.white,
  primaryColor: '#DB9204',
  fontFamily: '"Inter", system-ui, sans-serif',
  fontSize: '1rem',

  renderPanel: {
    background: theme.colors.gray3,
  },
}

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
