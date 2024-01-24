import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

import type { FC, ComponentProps } from 'react';
import type {
  IndexProps,
  CounterProps,
  MessageProps,
  ButtonProps,
} from 'views/types';

interface ReactComponents {
  index: IndexProps;
  'components/counter': CounterProps;
  'components/message': MessageProps;
  'components/button': ButtonProps;
}

async function renderComponent<K extends keyof ReactComponents>(
  componentName: K,
  props: ComponentProps<FC<ReactComponents[K]>>,
): Promise<string> {
  let Component: FC<ComponentProps<FC<ReactComponents[K]>>>;

  try {
    Component = (await import(`../views/${componentName}`)).default;
  } catch (error) {
    try {
      let capitalizedComponentName: string;
      const isInComponentsDirectory = componentName.startsWith('components/');
      if (isInComponentsDirectory) {
        capitalizedComponentName =
          componentName.slice(0, 11) +
          componentName.charAt(11).toUpperCase() +
          componentName.slice(12);
      } else {
        capitalizedComponentName =
          componentName.charAt(0).toUpperCase() + componentName.slice(1);
      }

      Component = (await import(`../views/${capitalizedComponentName}`))
        .default;
    } catch (error) {
      throw new Error(`Component ${componentName} not found`);
    }
  }

  return renderToString(createElement(Component, props));
}

export default renderComponent;
