import React, { useState } from "react";
import MensajesIngles from "./../lang/en-US.json";
import MensajesEspañol from "./../lang/es-ES.json";
import { IntlProvider } from "react-intl";

// Espacio global eso hemos creado con el contextos
const langContext = React.createContext();

const LangProvider = ({ children }) => {
  // agrego variables no estados esto es para atrapar al storage
  let localePorDefecto;
  let mensajePorDefecto;
  const lang = localStorage.getItem("lang");
  if (lang) {
    localePorDefecto = lang;
    if (lang === "es-ES") {
      mensajePorDefecto = MensajesEspañol;
    } else if (lang === "en-US") {
      mensajePorDefecto = MensajesIngles;
    } else {
      localePorDefecto = "en-US";
      mensajePorDefecto = MensajesIngles;
    }
  }

  // establecemos los estados
  const [mensajes, establecerMensajes] = useState(mensajePorDefecto);
  const [locale, establecerLocale] = useState(localePorDefecto);

  // funcion para los botones para cambiar el lenguaje
  const establecerlenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-ES":
        establecerMensajes(MensajesEspañol);
        establecerLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      case "es-US":
        establecerMensajes(MensajesIngles);
        establecerLocale("es-US");
        localStorage.setItem("lang", "es-US");
        break;
      default:
        establecerMensajes(MensajesIngles);
        establecerLocale("es-US");
        localStorage.setItem("lang", "es-US");
    }
  };

  return (
    <langContext.Provider value={{ establecerlenguaje: establecerlenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
