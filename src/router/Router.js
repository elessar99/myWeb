import {useRoutes} from "react-router-dom"

import "./Router.css";
import MainView from "../views/MainView";
import GiyimView from "../views/GiyimViews/GiyimView";

const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <MainView/>
            },
            {
                path: '/giyim',
                element: <GiyimView/>
            },
            {
                path: '*',
                element: <div>
                    404 Not Found
                </div>
            }
        ]
    )
    return routes
}
export default Router