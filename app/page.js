"use client"

import { RadioBtn, CheckboxBtn } from './components/components.js';
import RootLayout from './layout.js';
import React, {useState} from "react";
// import '@styles/globals.css';
export default function Home() {

    const [radio, setRadio] = useState('');
    const [check, setCheck] = useState('');
    return (
        <RootLayout>

            <div className='text-center mt-[50px] '>
                <h1 className='w-full'>indexPage</h1>
                <hr></hr>
                <div className='flex overflow-x-auto'>

                    <RadioBtn
                        name = 'input'
                        label = 'radioTest1'
                        value = 'r1'
                        // onChange = {setRadio}
                    />
                    <RadioBtn
                        name = 'input'
                        label = 'radioTest2'
                        value = 'r2'
                        // onChange = {setRadio}
                    />
                    <RadioBtn
                        name = 'input'
                        label = 'radioTest3'
                        value = 'r3'
                        // onChange = {setRadio}
                    />
                    <RadioBtn
                        name = 'input'
                        label = 'radioTest4'
                        value = 'r4'
                        // onChange = {setRadio}
                    />
                </div>
                <div className='flex overflow-x-auto'>

                    <CheckboxBtn
                        name = 'input'
                        label = 'checkTest1'
                        value = 't1'
                        // onChange = {setCheck}
                    />
                    <CheckboxBtn
                        name = 'input'
                        label = 'checkTest2'
                        value = 't2'
                        // onChange = {setCheck}
                    />
                    <CheckboxBtn
                        name = 'input'
                        label = 'checkTest3'
                        value = 't3'
                        // onChange = {setCheck}
                    />
                    <CheckboxBtn
                        name = 'input'
                        label = 'checkTest4'
                        value = 't4'
                        // onChange = {setCheck}
                    />
                </div>

            </div>
        </RootLayout>
    );
}
