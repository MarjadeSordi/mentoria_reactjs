import { ButtonApp } from "../styles/components/Button";
import { AlinhamentosButton, ContainerOnbiarding, IconesOnboarding, IconesOnboardingVolta, ImagemonBoarding } from "../styles/components/Onboarding";
import { TextButton, TextoBody, Title } from "../styles/components/Typograph";

function OnboardingElement(props) {
     console.log(props)
     return (

          <div>

               <ContainerOnbiarding>
                    <ImagemonBoarding src={props.img} />


                    <Title>{props.textTitle}</Title>
                    <TextoBody>  {props.textSubtitle} </TextoBody>

                    <AlinhamentosButton>
                         <ButtonApp
                              colorbgButton={'transparent'}
                              buttonColor={'#23232E'}
                              buttonBorder={'none'}
                              onClick={props.onClickAnterior} >
                              <TextButton>
                                   <IconesOnboardingVolta src={props.iconvolta} />
                                   {props.textAnterior}
                              </TextButton> </ButtonApp>

                         <ButtonApp
                              colorbgButton={'transparent'}
                              buttonColor={'#23232E'}
                              buttonBorder={'none'}
                              onClick={(props.onClick)}>
                              <TextButton> {props.text}
                                   <IconesOnboarding src={props.icon} />

                              </TextButton>
                         </ButtonApp>

                         {props.finaliza}
                    </AlinhamentosButton>

               </ContainerOnbiarding>
          </div>
     );

}

export default OnboardingElement;