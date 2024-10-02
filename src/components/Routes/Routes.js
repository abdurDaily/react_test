import { IoIosArrowDown } from "react-icons/io";
let Routes = [
    {
        path: '/',
        title: 'Home',
        
    },
    {
        path: '/about',
        title: 'About',
        icon:IoIosArrowDown ,
        submenu: [
            {
              path: '/features/feature1',
              title: 'Feature 1',
            },
            {
              path: '/features/feature2',
              title: 'Feature 2',
            },
          ],

    }
]

export default Routes;