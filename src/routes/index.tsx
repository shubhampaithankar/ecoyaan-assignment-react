import { Navigate, useRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { AboutPage } from '../pages'

export const Routes = () => {
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '',
                    
                    element: <Navigate to='home'/>
                },
                {
                    path: 'home',
                    element: <HomePage />
                },
                {
                    path: 'about',
                    element: <AboutPage />
                },
                {
                    path: '**',
                    element: <>404 Page not found</>
                }
            ]
        }
    ])
}