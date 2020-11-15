import apiFacade from "./ApiFacade";

function MyEditionFacade() {
  const getTimeStamp = () => {
    const request = apiFacade.prepareRequest("GET", null);

    return apiFacade.submitRequest("/myEdition/timestamp", request);
  };

  const getFact = () => {
    const request = apiFacade.prepareRequest("GET", null);

    return apiFacade.submitRequest("/myEdition/fact", request);
  };

  return { getTimeStamp, getFact };
}

const myEditionFacade = MyEditionFacade();
export default myEditionFacade;
