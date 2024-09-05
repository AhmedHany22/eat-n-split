import React from 'react'

const FormSplitBill = () => {
    return (
        <form className="form-split-bill">
            <h2>Split a bill with X</h2>
            <label>💰 Bill value</label>
            <input type="number" />
            <label>🧍 Your expense</label>
            <input type="number" />
            <label>🧍 X, expense</label>
            <input type="number" disabled />
            <select name="" id="payBill">
                <option value="you">You</option>
                <option value="X">X</option>
            </select>
            <button className="button">Split bill</button>
        </form>
    )
}

export default FormSplitBill;