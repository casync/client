/*
  Esse arquivo faz a inferência de tipos do theme.ts
*/

import { theme } from '../theme/theme'

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}