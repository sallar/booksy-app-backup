interface NavigationComponentProps {
  componentId: string;
}
interface NavigationComponentOptions {
  options?: (passProps?: Record<string, any>) => object;
}

export type NavigationComponent<P = {}> = React.FunctionComponent<
  P & NavigationComponentProps
> &
  NavigationComponentOptions;
