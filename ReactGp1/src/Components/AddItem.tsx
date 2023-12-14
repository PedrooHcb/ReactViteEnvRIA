import React, { useState } from 'react';

interface AddItemProps {
    onAddItem: (name: string, description: string) => void;
}

const AddItem: React.FC<AddItemProps> = ({ onAddItem }) => {
    const [newItemName, setNewItemName] = useState<string>('');
    const [newItemDescription, setNewItemDescription] = useState<string>('');

    const handleAddItem = async () => {
        const response = await fetch('http://3.128.249.166:8000/api/itens/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newItemName,
                    description: newItemDescription,
                }),
            });
        if (!response.ok) {
            throw new Error('Erro ao adicionar item');
        }
            
        onAddItem(newItemName, newItemDescription);
        
        setNewItemName('');
        setNewItemDescription('');
    };

    return (
        <div className='row'>
            <div className='col'>
                <input
                    type='text'
                    placeholder='Nome'
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                />
            </div>
            <div className='col'>
                <input
                    type='text'
                    placeholder='Descrição'
                    value={newItemDescription}
                    onChange={(e) => setNewItemDescription(e.target.value)}
                />
            </div>
            <div className='col'>
                <button className='btn btn-primary mb-1' onClick={handleAddItem}>Adicionar Item</button>
            </div>
        </div>
    );
};

export default AddItem;
