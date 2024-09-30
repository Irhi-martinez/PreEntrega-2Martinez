import { IoMdCart } from "react-icons/io";

export const CartWidget = () => {

    return (
        <div style={{ display: 'flex', marginRight: "20px", alignItems: 'center', width: "40px", justifyContent: 'space-between' }}>
            <IoMdCart size={30} />
            2
        </div>
    );
};
