<h2 align="center">
  401 axios interceptor for react-native + react-navigation
</h2>

## 🔥 Using

- import `NavigationService` in you component global:
```
const Layout = createRootNavigator(signed);
return (<Layout
  ref={(navigatorRef) => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  }}
/>);
```
- copy the interceptor from the file `api.js` to your axios settings file;
- change the name of the route within the error function of the interceptors:
```
 if (error.response.status === 401) {
    //call a function to delete the token and user data here
    NavigationService.navigate('ROUTE_NAME_FOR_LOGIN');
  }
```
