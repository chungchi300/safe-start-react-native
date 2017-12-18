import { NavigationActions } from 'react-navigation';

export function goTo(routeName, params) {
  const navigateAction = NavigationActions.navigate({
    routeName: routeName,

    params: params,
  });
  return navigateAction;
}
