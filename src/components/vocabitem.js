import './vocabitem.css'

function Vocabitem(props) {
    const { vocab } = props
    return (
        <tr>
            <td>{vocab.word}</td>
            <td>{vocab.meaning}</td>
        </tr>
    )
}

export default Vocabitem