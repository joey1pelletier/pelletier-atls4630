


export default function Human(
    /*person_name,
    person_age,
    person_hobby
    */
   props
) {
    return (
        <>
        <h2>{props.name}</h2>
        <h3>Age: {props.age}</h3>
        <h4>Hobby: {props.hobby}</h4>
        {/* <img src={joeyimg} alt="sketch of joey" width="200" height="200"/> */}
        {/* <h2>Click on the buttons to switch what Joey has!</h2> */}
        </>
    );
}