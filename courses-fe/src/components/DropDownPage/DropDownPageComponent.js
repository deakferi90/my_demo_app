import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import './style.scss';

const DropDownPageComponent = ({
    items, addItemAction, selectedValue, setSelectedValue, pairNumbers, 
    imPairNumbers, addPairNumber, addImPairNumber, specialWords, addSpecialWord,
    listWords, addListWord, openModal, closeModal, isModalOpen, modalText, counter, increment, decrement }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [specialName, setSpecialName] = useState('');
    const [listName, setListName] = useState('');
    const [counterTwo, setCounter] = useState(0);

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleChangeSpecialWord = (e) => {
        setSpecialName(e.target.value)
    }

    const handleChangelistWord = (e) => {
        setListName(e.target.value)
    }
    const handleSubmit = () => {
        addItemAction(name);
        setName('');
    }

    const handleChangeNumbers = (e) => {
        setNumber(e.target.value);
    }

    const handleSubmitNumbers = () => {
        if (number % 2 === 0) {
            addPairNumber(parseInt(number));
        } else {
            addImPairNumber(parseInt(number));
        }
        setNumber('');
    }

    const submitSpecialWord = () => {
        addSpecialWord(specialName);
        setSpecialName('');
    }

    const submitListWord = () => {
        addListWord(listName);
        setListName('');
    }

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const removeItem = () => {
        setSelectedValue('');
    }

    const checkIfItIsASpecialWord = (checkWord) => {
        const isSpecialWord = specialWords.some((elem) => elem === checkWord)
        if (isSpecialWord) {
            openModal('This is a special word')
        } else {
            openModal('This is not a special word');
        }
    }

    const incrementNumber = () => {
        isPrime(counter + 1);
        increment();
        if((counter+1) % 10 === 0) {
            openModal('The number can be divided with 10')
        }
    }

    const decrementNumber = () => {
        isPrime(counter - 1);
        decrement();
        if((counter-1) % 10 === 0) {
            openModal('The number can be divided with 10')
        }
    }

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return openModal(`${num} is a prime number`);
    }

    useEffect(() => {
        console.log(pairNumbers);
        console.log(imPairNumbers)
    })

    return (
        <div>
            <div className='parent-flex'>
                <div className='display'>
                    <div>
                        <h2>DrowDownPage</h2>
                    </div>
                    <div className='dropdown-container'>
                        <input onChange={handleChange} value={name} />
                        <div className='btn-cont'>
                            <button
                                onClick={handleSubmit}
                            >+
                            </button>
                        </div>
                    </div>
                    <select onChange={handleSelectChange} className='select-cont'>
                        <option>No value selected</option>
                        {items.map((el) => {
                            return <option key={el}>{el}</option>
                        })}
                    </select>
                    <div className='container list-item-container'>
                        {selectedValue}
                        <button onClick={removeItem} className='deleteBtn'>{selectedValue ? 'X' : null}</button>
                    </div>
                </div>
                <div className='input-and-box-container'>
                    <input type="text" onChange={handleChangeNumbers} value={number} />
                    <div className='btn-cont'>
                        <button
                            onClick={handleSubmitNumbers}
                        >+
                        </button>
                    </div>
                    <div className='list-container'>
                        <div className='box'>Pair
                            <div>{pairNumbers.map((num) => {
                                return <div key={num}>{num}</div>
                            })}</div>
                        </div>
                        <div className='box'>ImPair
                            <div>{imPairNumbers.map((num) => {
                                return <div key={num}>{num}</div>
                            })}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='special-list'>
                <div className='input-list-container'>
                    <input type="text" onChange={handleChangeSpecialWord} value={specialName} />
                    <div className='special-word'></div>
                    <button onClick={submitSpecialWord}>+</button>
                    <div className='list-container'>
                        <div className='box'><div className='list-title'>Special Words</div>
                            <div className='list'>{specialWords.map((special) => {
                                return <div key={special}>{special}</div>
                                return <div>{num}</div>
                            })}</div>
                        </div>
                    </div>
                </div>
                <div className='input-list-container'>
                    <input type="text" onChange={handleChangelistWord} value={listName} />
                    <div className='special-word'></div>
                    <button onClick={submitListWord}>+</button>
                    <div className='list-container'>
                        <div className='box'><div className='list-title'>List Words</div>
                            <div className='list'>{listWords.map((list) => {
                                return <div key={list}>{list}<button onClick={() => checkIfItIsASpecialWord(list)}>Check</button></div>
                            })}
                            </div>
                        </div>
                    </div>
                    <Modal text={modalText} show={isModalOpen} onHide={closeModal}></Modal>
                </div>
            </div>
            <div className='counter-container'>
                <div className='counter-button-container'><button onClick={() => setCounter(counterTwo + 1)}className='counter-button'>+</button></div>
                <div className='counter-button-container'><button onClick={() => setCounter(counterTwo - 1)}className='counter-button'>-</button></div>
                <div className='counter-value'>{counterTwo}</div>
            </div>
            <div className='counter-container'>
                <div className='counter-button-container'><button onClick={()=> incrementNumber()} className='counter-button'>+</button></div>
                <div className='counter-button-container'><button onClick={()=> decrementNumber()} className='counter-button'>-</button></div>
                <div className='counter-value'>{counter}</div>
            </div>
            </div>
            <div className='special-list'>Feri</div>
        </div>
    )
}

export default DropDownPageComponent;
