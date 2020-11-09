import React from 'react';
import Wrapper from '../components/Wrapper';
export default function ContractPage() {
    return (
        <div>
        <Wrapper />
        <div>
            <div>Account Key:0x8745F77F44003af9F91F821943d1291BFD6307fC</div>
            <div>Balance:99.98 ETH</div>
            <ul>
                Standing
                <li>Cancel Standing: Positive</li>
                <li>Account age: Positive</li>
                <li>Understand status: Positive</li>
            </ul>
        </div>
        <ul>
            <ui>
                <div>
                    <h1>Book Of Manythings</h1>
                    <h2>Used</h2>
                    <div>1 ETH</div>
                    <h2>Valid</h2>
                    <form>
                    <input type='textbox' />
                    <button type='submit'>Enter Valid Key</button>
                    </form>
                    <form>
                        <button type='submit'>Require Understanding</button>
                    </form>
                </div>
            </ui>
        </ul>
        </div>
      );

}