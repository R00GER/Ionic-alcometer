import React, { useState } from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
} from "@ionic/react";

// import { calculatorOutline } from "ionicons/icons";

import Result from "./components/Result";
import Form from "./components/Form";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./App.css";

const App = () => {
  const [person, setPerson] = useState({});
  const [time, setTime] = useState();
  const [bottles, setBottles] = useState();
  const [promilles, setPromilles] = useState();

  const handleInputs = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleTime = (e) => setTime(+e.target.value);
  const handleBottles = (e) => setBottles(+e.target.value);

  const calculatePromilles = () => {
    const weight = person.weight;
    const gender = person.gender;
    let result;

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;

    if (gender === "male") result = grams / (weight * 0.7);
    if (gender === "female") result = grams / (weight * 0.6);

    setPromilles(result);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ion Alcometer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <Form
            handleInputs={handleInputs}
            handleTime={handleTime}
            handleBottles={handleBottles}
            calculatePromilles={calculatePromilles}
            person={person}
          />
          {promilles && <Result promilles={promilles} />}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
