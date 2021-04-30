import { ButtonApp } from '../styles/components/Button';
import {
  AlinhamentosButton,
  ContainerOnbiarding,
  DivImg,
  IconesOnboarding,
  IconesOnboardingVolta,
  ImagemonBoarding,
} from '../styles/components/Onboarding';
import { DivTelasFinais } from '../styles/components/StepCadastroVisual';
import { TextButton, TextoBody, Title } from '../styles/components/Typograph';

function OnboardingElement(props) {
  console.log(props);
  return (
    <div>
      <ContainerOnbiarding>
        <DivImg>
          <ImagemonBoarding src={props.img} />{' '}
        </DivImg>

        <DivTelasFinais>
          <Title fontSize={'25px'}>{props.textTitle}</Title>

          <TextoBody> {props.textSubtitle} </TextoBody>
        </DivTelasFinais>
        {props.button && (
          <ButtonApp
            colorbgButton={'#1B5DFF'}
            buttonTop={25}
            buttonBorder={'none'}
            buttonSize={'50%'}
            buttonColor={'#fff'}
            onClick={props.onClick}
            type="button"
            outline={'none'}
          >
            {' '}
            {props.button}{' '}
          </ButtonApp>
        )}
        <AlinhamentosButton>
          <ButtonApp
            colorbgButton={'transparent'}
            buttonColor={'#23232E'}
            buttonBorder={'none'}
            onClick={props.onClickAnterior}
          >
            <TextButton>
              <IconesOnboardingVolta src={props.iconvolta} />
              {props.textAnterior}
            </TextButton>{' '}
          </ButtonApp>
          <> {props.SpanUm} </>
          <> {props.SpanDois} </>
          <> {props.SpanTres} </>
          <> {props.SpanQuatro} </>
          <ButtonApp
            colorbgButton={'transparent'}
            buttonColor={'#23232E'}
            buttonBorder={'none'}
            onClick={props.onClick}
          >
            <TextButton>
              {' '}
              {props.text}
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
