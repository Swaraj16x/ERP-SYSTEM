import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const AddCustomerModal = ({ addOrd, closeModal }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [productname, setProductName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrd({ id: Math.random(), orderId: `ORD00${Math.floor(Math.random() * 100)}`, customerName: name, orderDate: new Date().toISOString().slice(0, 10), status: 'Pending' });
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}><FontAwesomeIcon icon={faClose} /></span>
                <h3>Add order</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Customer Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />

                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" value={category} onChange={e => setCategory(e.target.value)} />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />

                    <label htmlFor="productname">Product Name:</label>
                    <input type="text" id="productname" name="productname" value={productname} onChange={e => setProductname(e.target.value)} />

                    <button type="submit">Add order</button>
                </form>
            </div>
        </div>
    );
};

export default AddCustomerModal;
