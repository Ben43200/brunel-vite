

const completTexts = ({completTexts}) =>{
    return (
        <ul>
            {completTexts.map((completText,id) =>(
                <li key={id}>{completText}</li>
            ))}
        </ul>
    )
}

export default completTexts