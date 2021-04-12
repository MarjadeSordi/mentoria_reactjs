import React from 'react';
import { ButtonApp } from '../../styles/components/Button';
import { SyncOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { TextButton } from '../../styles/components/Typograph';



const Buttons = () => {

    const [isButtonLoading, setIsButtonLoading] = useState(false);


    return (


        <div>
            <ButtonApp
                colorbgButton={'#1B5DFF'}
                buttonTop={25}
                buttonBorder={'none'}
                disabled={() => setIsButtonLoading(true)}
            >

                {isButtonLoading && <SyncOutlined />}

                <TextButton> button 1</TextButton>
            </ButtonApp>

            <ButtonApp
                colorbgButton={'transparent'}
                buttonColor={'#1B5DFF'}
                buttonTop={45}
                buttonBorder={'1px solid #1B5DFF'}
                disabled={() => setIsButtonLoading(true)}
            >
                {isButtonLoading && <SyncOutlined />}
                <TextButton> button 2</TextButton>

            </ButtonApp>

            <ButtonApp
                colorbgbutton={'transparent'}
                buttonColor={'#333333'}
                buttonBorder={'none'}
                buttonTop={60}
                disabled={() => setIsButtonLoading(true)}>

                {isButtonLoading && <SyncOutlined />}
                <TextButton> button 3</TextButton>
            </ButtonApp>


            <ButtonApp
                colorbgButton={'#828282'}
                buttonBorder={'none'}
                buttonTop={75}
                disabled={() => setIsButtonLoading(true)}>
                {isButtonLoading && <SyncOutlined />}
                <TextButton> button 4</TextButton>

            </ButtonApp>

        </div>


    )
}

export default Buttons;