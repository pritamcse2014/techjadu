import './Fas.css'

const Fas = ({fas}) => {
    const {image, name} = fas;
    return (
        <div className="shadow">
            <img src={image} className="w-100" alt="..." />
            <h6>{name}</h6>
        </div>
    );
};

export default Fas;