import AddShipment from "./components/AddShipment";
import Dashboard from "./components/Dashboard";
const Routes = [
    {
      path: "/",
      component: Dashboard
    },
    {
      path:'/AddNewShipment',
      component:AddShipment,
      exact: true
    }
  ];
  
  export default Routes;