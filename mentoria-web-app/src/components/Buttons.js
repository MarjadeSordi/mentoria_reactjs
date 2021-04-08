import React from 'react';
import { ButtonApp } from '../styles/components/buttons';
import {SyncOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { TextP } from '../styles/components/typography';



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
          <TextP> button1 </TextP> 
           </ButtonApp>

          <ButtonApp
          colorbgButton = {'transparent'} 
          buttonColor = {'#1B5DFF'}
          buttonTop ={45}
          buttonBorder = {'1px solid #1B5DFF'}
          disabled = {() => setIsButtonLoading(true)}
          >
         {isButtonLoading &&  <SyncOutlined /> } 
          <TextP> button 2 </TextP> 

          </ButtonApp>

          <ButtonApp
          colorbgbutton = {'transparent'} 
          buttonColor= {'#333333'}
          buttonBorder = {'none'}
          buttonTop ={60}
          disabled = {() => setIsButtonLoading(true)}>
              
          <TextP> button 3 </TextP> 
          </ButtonApp>

          
          <ButtonApp 
          colorbgButton = {'#828282'}
          buttonBorder = {'none'}
          buttonTop  = {75}
          disabled = {() => setIsButtonLoading(true)}>
          {isButtonLoading &&  <SyncOutlined /> }     
         
          
          <TextP> button 4 </TextP> 
          </ButtonApp>

      </div>

    
    )
}

export default Buttons; 