import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

const PrivateRoutes: any = ({ component: Component, path: Path, ...rest}: any) => {
  const isLogin: string | null = localStorage.getItem('@GamaAcademy');
  const isSectionActive: any = () => {
    if(isLogin === null ){
      return false
    } else {
      const tokenPayLoad: any = jwt_decode(isLogin);
      const expSeconds = tokenPayLoad.exp;
      const timeNow = Date.now() / 1000;

      return timeNow > expSeconds ? false : true;

    }
  }

  return (
    <Route {...rest} render={ props => (
      isSectionActive() ? <Component {...props}/> : <Redirect to="/"/>
    )}/>
  );
}

export default PrivateRoutes;