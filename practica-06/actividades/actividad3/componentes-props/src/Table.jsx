//Table.js
import { Component } from 'react';

// Componente de clase Table - recibe y envia props
class Table extends Component {
    render() {
        //this.props
        const {characterData} = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
        );
    }
}

//TableHeader
const TableHeader = () => (
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Trabajo</th>
        </tr>
    </thead>
);

//TableBody - iterrar con map()
const TableBody = (props) => {
    
    const {characterData} = props;
    const fil = characterData.map((character, index)=>{
        return (
            <tr key={index}>
                <td>{character.nombre}</td>
                <td>{character.trabajo}</td>
            </tr>
        );
    });
    return (
        <tbody>
            {fil}
        </tbody>
    )
}
export default Table;
