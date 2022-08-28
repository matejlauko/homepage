import {
  createComponentTokens,
  semanticColors,
  palette,
  baseDarkColors,
  darkColors,
  createBaseTokens,
} from '@matejlauko/tokens'
const {
  mauveDark,
  mauveDarkA,
  amberDark,
  amberDarkA,
  greenDark,
  crimsonDark,
  blueDark,
  yellowDark,
} = palette

const base = createBaseTokens({
  fonts: {
    body: '"Inter", system-ui, sans-serif',
  },
  fontSizes: {
    0: '0.6875rem',
    1: '0.75rem',
    2: '0.8125rem',
    3: '0.875rem',
    4: '0.9375rem',
    5: '1rem',
    6: '1.125rem',
    7: '1.25rem',
    8: '1.5rem',
    9: '1.75rem',
    10: '2rem',

    base: '100%',
  },
  lineHeights: {
    xs: 1.1,
    sm: 1.2,
    md: 1.5,
    lg: 1.7,
    xl: 1.86,
    body: 1.5,
  },
  fontWeights: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },
  space: {
    '0_5': '2px',
    1: '4px',
    '1_5': '6px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    12: '48px',
    14: '56px',
    16: '64px',
    18: '72px',
    20: '80px',
    24: '96px',
    28: '112px',
  },
  sizes: {
    control_3xs: '16px',
    control_2xs: '20px',
    control_xs: '24px',
    control_sm: '28px',
    control_md: '36px',
    control_lg: '40px',
    control_xl: '48px',
    control_xxl: '64px',
  },
  radii: {
    sm: '4px',
    md: '6px',
    lg: '10px',
    round: '50%',
    max: '9909px',
  },
  shadows: {
    outline: '0 0 0 2px $colors$focus',

    1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    2: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    3: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    4: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    5: '0px 10px 38px -10px rgba(0, 0, 0, 0.35), 0px 10px 20px -15px rgba(0, 0, 24, 0.2)',
  },
  zIndices: {
    under: 0,
    base: 1,
    search: 3,
    highlight: 11,
    fixedBox: 100,
    nav: 200,
    dialogOverlay: 300,
    dialog: 301,
    splash: 500,
  },
  transitions: {
    appear_fast: '.15s cubic-bezier(0, 0, 0.40, 1)', // ease-out
    appear_slow: '0.3s cubic-bezier(0, 0, 0.40, 1)', // ease-out
    out_fast: '0.15s cubic-bezier(0.50, 0, 1, 1)', // ease-in
    out_slow: '0.3s cubic-bezier(0.50, 0, 1, 1)', // ease-in
    move_fast: '0.15s cubic-bezier(0.45, 0, 0.40, 1)', // ease-in-out
    move_slow: '0.3s cubic-bezier(0.45, 0, 0.40, 1)', // ease-in-out
  },
})

const colors = {
  ...baseDarkColors,
  ...darkColors,
  white: '#FFF',
  black: mauveDark.mauve1,

  gray12: mauveDark.mauve12,
  gray11: mauveDark.mauve11,
  gray10: mauveDark.mauve10,
  gray9: mauveDark.mauve9,
  gray8: mauveDark.mauve8,
  gray7: mauveDark.mauve7,
  gray6: mauveDark.mauve6,
  gray5: mauveDark.mauve5,
  gray4: mauveDark.mauve4,
  gray3: mauveDark.mauve3,
  gray2: mauveDark.mauve2,
  gray1: mauveDark.mauve1,

  grayA11: mauveDarkA.mauveA11,
  grayA10: mauveDarkA.mauveA10,
  grayA9: mauveDarkA.mauveA9,
  grayA8: mauveDarkA.mauveA8,
  grayA7: mauveDarkA.mauveA7,
  grayA6: mauveDarkA.mauveA6,
  grayA5: mauveDarkA.mauveA5,
  grayA4: mauveDarkA.mauveA4,
  grayA3: mauveDarkA.mauveA3,
  grayA2: mauveDarkA.mauveA2,
  grayA1: mauveDarkA.mauveA1,

  accent12: amberDark.amber12,
  accent11: amberDark.amber11,
  accent10: amberDark.amber10,
  accent9: amberDark.amber9,
  accent8: amberDark.amber8,
  accent7: amberDark.amber7,
  accent6: amberDark.amber6,
  accent5: amberDark.amber5,
  accent4: amberDark.amber4,
  accent3: amberDark.amber3,
  accent2: amberDark.amber2,
  accent1: amberDark.amber1,

  blue3: blueDark.blue3,
  blue11: blueDark.blue11,
  yellow3: yellowDark.yellow3,
  yellow11: yellowDark.yellow11,
  crimson3: crimsonDark.crimson3,
  crimson11: crimsonDark.crimson11,
  green3: greenDark.green3,
  green11: greenDark.green11,

  accentA8: amberDarkA.amberA8,

  hiContrast: '$white',
  loContrast: '$black',

  bodyBg: '$gray2',

  uibg: '$gray3',
  uibg2: '$gray4',
  uibg3: '$gray5',
  uibg4: '$gray6',
  uibg5: '$gray7',
  uibg6: '$gray8',

  elbg: '$gray3',
  elbg2: '$gray4',
  elbg3: '$gray5',
  line: '$gray6',
  border: '$gray7',
  border2: '$gray8',

  elbgA: '$grayA2',
  elbgA2: '$grayA4',
  elbgA3: '$grayA5',

  solid: '$hiContrast',
  solid2: '$gray12',
  solid3: '$gray11',

  text: '$hiContrast',
  text2: '$gray12',
  text3: '$gray11',
  text4: '$gray10',
  textContrast: '$loContrast',

  ...semanticColors,
}

const componentTokens = createComponentTokens({
  text: {
    caps: {
      letterSpacing: '0.1em',
    },
    paragraph: {
      lineHeight: '$lineHeights$lg',
    },
  },

  heading: {
    lineHeight: '$lineHeights$sm',
    fontWeight: '$fontWeights$bold',
  },

  button: {
    borderRadius: '$radii$md',
    fontWeight: '$fontWeights$medium',
    disabled: {
      opacity: 0.7,
    },
  },

  icon: {
    xs: {
      size: '10px',
    },
    sm: {
      size: '16px',
    },
    md: {
      size: '20px',
    },
    lg: {
      size: '24px',
    },
    xl: {
      size: '32px',
    },
  },

  scrollbar: {
    width: '15px',
    borderRadius: '$radii$lg',
    borderWidth: '5px',
    bg: '$colors$gray6',
  },

  input: {
    borderWidth: '2px',
    borderRadius: '$radii$md',
    disabled: {
      opacity: 0.7,
    },
    sm: {
      px: '$space$2',
      fontSize: '$fontSizes$2',
    },
    md: {
      px: '$space$3',
      fontSize: '$fontSizes$base',
    },
    lg: {
      px: '$space$4',
      fontSize: '$fontSizes$4',
    },
    placeholder: {
      color: '$colors$gray9',
    },
  },

  textArea: {
    borderWidth: '2px',
    lineHeight: 1.4,
    disabled: {
      opacity: 0.7,
    },
    sm: {
      minHeight: '$sizes$control_sm',
      minWidth: '200px',
      fontSize: '$fontSizes$2',
      px: '$space$2',
      py: '$space$1',
      borderRadius: '$radii$md',
    },
    md: {
      minHeight: '$sizes$control_md',
      minWidth: '240px',
      fontSize: '$fontSizes$base',
      px: '$space$3',
      py: '$space$2',
      borderRadius: '$radii$md',
    },
    lg: {
      minHeight: '$sizes$control_md',
      minWidth: '300px',
      fontSize: '$fontSizes$4',
      px: '$space$4',
      py: '$space$3',
      borderRadius: '$radii$lg',
    },
    placeholder: {
      color: '$colors$gray9',
    },
  },

  select: {
    trigger: {
      borderRadius: '$radii$md',
      px: '$space$4',
      fontSize: '$fontSizes$base',
      height: '$sizes$control_md',
      color: '$colors$text2',
      borderWidth: '2px',
    },
  },

  overlay: {
    bg: '$colors$grayA12',
    backdropFilter: 'blur(4px)',
  },

  panel: {
    bg: '$colors$grayA2',
    backdropFilter: 'blur(20px)',
    borderRadius: '$radii$lg',
    boxShadow: '$shadows$5',
  },

  tooltip: {
    bg: '$colors$grayA12',
    borderRadius: '$radii$lg',
    boxShadow: '$shadows$3',
    color: '$colors$textContrast',
    fontSize: '$fontSizes$1',
    fontWeight: '$fontWeights$medium',
  },

  switch: {
    width: '$sizes$control_lg',
    height: '$sizes$control_sm',
    bg: '$colors$elbg2',
  },

  container: {
    maxWidth: '864px',
  },

  badge: {
    borderRadius: '$radii$md',
    letterSpacing: '0.03em',
    fontWeight: '$fontWeights$semibold',
    sm: {
      fontSize: '$fontSizes$0',
      px: '$space$2',
      height: '$sizes$control_xs',
    },
  },
})

export const tokens = {
  colors,
  ...base,
  ...componentTokens,
}

export default tokens
