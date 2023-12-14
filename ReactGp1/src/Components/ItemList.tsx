import { useEffect, useState } from 'react';

import AddItem from './AddItem';

interface Item {
    id: number;
    name: string;
    description: string;
}

const ItemList = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetchItems();
    }, []);

    // CRUD
    const fetchItems = async () => {
       /*  try { */
            const response = await fetch('http://3.128.249.166:8000/api/itens/');
            /* if (!response.ok) {
                throw new Error('Não foi possível obter os dados (await fetch)');
            } */
            const data = await response.json();
            setItems(data);
        /* } catch (error) {
            console.error('Erro ao buscar itens (fetchItems):', error);
        } */
    };

    const handleDeleteItem = async (itemId: number) => {
        try {
            const response = await fetch(`http://3.128.249.166:8000/api/itens/${itemId}/`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao deletar item');
            }

            await fetchItems(); // Atualiza a lista após deletar o item
        } catch (error) {
            console.error('Erro ao deletar item:', error);
        }
    };

    return (
        <div className='form-group p-2 border border-secondary rounded '>
            <h1 className='border border-secondary'>Lista de Itens</h1>
            
            <AddItem onAddItem={fetchItems} />

            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody >
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => handleDeleteItem(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemList;