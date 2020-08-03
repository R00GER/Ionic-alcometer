import React from "react";

import {
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import { calculatorOutline } from "ionicons/icons";

const Form = (props) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Weight</IonLabel>
            <IonInput
              name="weight"
              value={props.person.weight}
              onIonChange={(e) => props.handleInputs(e)}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Gender</IonLabel>
            <IonSelect name="gender" onIonChange={(e) => props.handleInputs(e)}>
              <IonSelectOption value="male">Male</IonSelectOption>
              <IonSelectOption value="female">Female</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Time</IonLabel>
            <IonSelect name="time" onIonChange={(e) => props.handleTime(e)}>
              {[...Array(24).keys()].map((item) => {
                return (
                  <IonSelectOption key={item} value={item + 1}>
                    {item + 1}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Bottles</IonLabel>
            <IonSelect name="bottles" onIonChange={(e) => props.handleBottles(e)}>
              {[...Array(100).keys()].map((item) => {
                return (
                  <IonSelectOption key={item} value={item + 1}>
                    {item + 1}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow className="ion-margin-top">
        <IonCol>
          <IonButton onClick={() => props.calculatePromilles()}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Form;
