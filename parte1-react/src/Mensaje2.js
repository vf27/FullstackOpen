const Mensaje2 = (props) => {       
    return( 
        <div>
            <h3> desde componente Mensaje2 (archivo separado)(modulo) </h3>
            <h3 style= {{color: props.color}}>
                {props.message } 
            </h3>
        </div>
    )

}
export default Mensaje2