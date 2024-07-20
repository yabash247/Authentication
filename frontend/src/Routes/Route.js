
import Homepage from '../views/Homepage'
import Registerpage from '../views/Registerpage'
import Loginpage from '../views/Loginpage'
import Dashboard from '../views/Dashboard'
import Profilepage from '../views/Profilepage'
import HomepageSpec from '../views/specifications/HomepageSpec'
import catfishFarming from '../views/specifications/catfishFarming'

const routes = [

    //dashboard
    { path: `${process.env.PUBLIC_URL}/dashboard/default`, Component: <Default /> },
    { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, Component: <Ecommerce /> },
    { path: `${process.env.PUBLIC_URL}/dashboard/project`, Component: <Project /> },
]
export default routes;