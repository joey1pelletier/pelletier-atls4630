

// version with destructured props
export default function Human({name, age, hobby}) {
    return (
        <>
        <h2>{name}</h2>
        <h3>Age: {age}</h3>
        <h4>Hobby: {hobby}</h4>
        {/* <img src={joeyimg} alt="sketch of joey" width="200" height="200"/> */}
        {/* <h2>Click on the buttons to switch what Joey has!</h2> */}
        </>
    );
}


/* Version with regular props

export default function Human(props) {
    return (
        <>
        <h2>{props.name}</h2>
        <h3>Age: {props.age}</h3>
        <h4>Hobby: {props.hobby}</h4>
        </>
    );
}

*/

