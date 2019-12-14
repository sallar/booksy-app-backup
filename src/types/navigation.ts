import { Options } from 'react-native-navigation';

interface NavigationComponentProps {
  componentId: string;
}
interface NavigationComponentOptions {
  options?: (passProps?: Record<string, any>) => Options;
}

export type NavigationComponent<P = {}> = React.FunctionComponent<
  P & NavigationComponentProps
> &
  NavigationComponentOptions;
