import { Outlet } from "react-router-dom";


const Mainlayout = () => {
    return (
        <div className="text-black">
            <Outlet />
        </div>
    );
};

export default Mainlayout;