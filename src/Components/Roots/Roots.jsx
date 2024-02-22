import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='bg-purple-950 h-screen'>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Roots;