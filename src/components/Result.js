import React from "react";

import { IonRow, IonCol, IonCard, IonCardTitle } from "@ionic/react";

const Result = ({ promilles }) => {
  return (
    <IonRow className="ion-margin">
      <IonCol>
        <IonCard className="ion-padding">
          <IonCardTitle>
            Your blood alcohol level is {promilles.toFixed(2)}
          </IonCardTitle>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default Result;
