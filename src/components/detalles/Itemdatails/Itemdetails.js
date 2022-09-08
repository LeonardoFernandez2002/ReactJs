

const Itemdetails = ({description, img, price}) => {
    return (
        <div>
            <h1>{price}</h1>
            <p>{description}</p>
            <p>{img}</p>
        </div>
    )
}

export default Itemdetails;