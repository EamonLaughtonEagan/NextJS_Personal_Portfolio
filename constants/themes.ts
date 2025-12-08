export type Theme = {
  name: string
  colors: {
    background: string
    foreground: string
    sidebar: string
    line: string
    highlight: string
    card: string
    cardHover: string
    hover: string
    // Code syntax colors
    syntax: {
      keyword: string
      variable: string
      string: string
      boolean: string
      comment: string
    }
  }
}

export const themes: Record<string, Theme> = {
  dark: {
    name: 'Dark',
    colors: {
      background: '#1f1f1f',
      foreground: '#ededed',
      sidebar: '#181818',
      line: '#37373d',
      highlight: '#4ade80',
      card: '#1e1e1e',
      cardHover: '#2a2d2e',
      hover: '#2a2d2e',
      syntax: {
        keyword: '#c678dd',
        variable: '#61afef',
        string: '#98c379',
        boolean: '#e5c07b',
        comment: '#5c6370',
      }
    }
  },
  light: {
    name: 'Light',
    colors: {
      background: '#ffffff',
      foreground: '#1f1f1f',
      sidebar: '#f3f4f6',
      line: '#e5e7eb',
      highlight: '#10b981',
      card: '#f9fafb',
      cardHover: '#e5e7eb',
      hover: '#f3f4f6',
      syntax: {
        keyword: '#9333ea',
        variable: '#3b82f6',
        string: '#16a34a',
        boolean: '#ea580c',
        comment: '#6b7280',
      }
    }
  },
  ocean: {
    name: 'Ocean',
    colors: {
      background: '#0f172a',
      foreground: '#e2e8f0',
      sidebar: '#1e293b',
      line: '#334155',
      highlight: '#06b6d4',
      card: '#1e293b',
      cardHover: '#334155',
      hover: '#334155',
      syntax: {
        keyword: '#818cf8',
        variable: '#38bdf8',
        string: '#34d399',
        boolean: '#fbbf24',
        comment: '#64748b',
      }
    }
  },
  forest: {
    name: 'Forest',
    colors: {
      background: '#1a2e1a',
      foreground: '#e8f5e9',
      sidebar: '#0d1f0d',
      line: '#2d4a2d',
      highlight: '#66bb6a',
      card: '#1e3a1e',
      cardHover: '#2d4a2d',
      hover: '#2d4a2d',
      syntax: {
        keyword: '#81c784',
        variable: '#4dd0e1',
        string: '#aed581',
        boolean: '#ffb74d',
        comment: '#546e7a',
      }
    }
  },
  sunset: {
    name: 'Sunset',
    colors: {
      background: '#2d1b2e',
      foreground: '#f3e5f5',
      sidebar: '#1a0f1b',
      line: '#4a2d4d',
      highlight: '#ff6b9d',
      card: '#3d2b3e',
      cardHover: '#4a2d4d',
      hover: '#4a2d4d',
      syntax: {
        keyword: '#ce93d8',
        variable: '#90caf9',
        string: '#ffab91',
        boolean: '#fff59d',
        comment: '#9575cd',
      }
    }
  }
}

export type ThemeName = keyof typeof themes