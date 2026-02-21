
const Card = (props) => {
    return (
        <div className="bg-white w-full max-w-64 p-3 rounded-lg shadow-xl/5">
            <img 
                src={props.image} 
                alt={props.imgAlt} 
                className="rounded-lg" />
            <div className="p-2 text-center">
                <h3 className="font-bold mb-1 text-slate-900">{props.title}</h3>
                <small className="font-medium text-slate-500">{props.description}</small>
            </div>
        </div>
    )
}

export default Card