import './Category.css'

const Category = ({category}) => {
    const {image, name} = category;
    return (
        <div className="shadow">
            <img src={image} className="w-100" alt="..." />
            <h6>{name}</h6>
        </div>
    );
};

export default Category;