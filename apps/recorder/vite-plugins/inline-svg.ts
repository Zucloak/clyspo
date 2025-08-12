import { readFileSync } from 'fs';
import { resolve } from 'path';

export default function inlineSvg({ root }) {
  const ICONS_PATH = resolve('/app/packages/ui-solid/icons');
  return {
    name: 'inline-svg',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('~/icons/')) {
        return source;
      }
      return null;
    },
    load(id) {
      if (id.startsWith('~/icons/')) {
        const iconName = id.replace('~/icons/', '');
        const iconPath = resolve(ICONS_PATH, iconName);
        try {
          const svg = readFileSync(iconPath, 'utf-8');
          return `export default ${JSON.stringify(svg)};`;
        } catch (error) {
          console.error(`Failed to load icon: ${iconName}`, error);
          return null;
        }
      }
      return null;
    },
  };
}
