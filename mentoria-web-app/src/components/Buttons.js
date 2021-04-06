import React from 'react';
import { ButtonApp } from '../style';
import {SyncOutlined} from '@ant-design/icons';
import { useState } from 'react';



const Buttons = () => {

    const [isButtonLoading, setIsButtonLoading] = useState(false);

    
    return(

       
     <div>
          <ButtonApp
          colorbgButton = {'#1B5DFF'}
          buttonTop = {25} 
          buttonBorder = {'none'}
          disabled = {() => setIsButtonLoading(true)}
         > 
         
         {isButtonLoading &&  <SyncOutlined /> } 
          
          button1 </ButtonApp>

          <ButtonApp
          colorbgButton = {'transparent'} 
          buttonColor = {'#1B5DFF'}
          buttonTop ={45}
          buttonBorder = {'1px solid #1B5DFF'}
          disabled = {() => setIsButtonLoading(true)}
          >
         {isButtonLoading &&  <SyncOutlined /> } 
          button 2

          </ButtonApp>

          <ButtonApp
          colorbgbutton = {'transparent'} 
          buttonColor= {'#333333'}
          buttonBorder = {'none'}
          buttonTop ={60}
          disabled = {() => setIsButtonLoading(true)}>
              
          {isButtonLoading &&  <SyncOutlined /> } 
          button 3
          </ButtonApp>

          
          <ButtonApp 
          colorbgButton = {'#828282'}
          buttonBorder = {'none'}
          buttonTop  = {75}
          disabled = {() => setIsButtonLoading(true)}>
          {isButtonLoading &&  <SyncOutlined /> }     
          button 4 
          
          </ButtonApp>

      </div>

    
    )
}

export default Buttons; 