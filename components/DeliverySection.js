import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ScrollAnimation from "react-animate-on-scroll";

const Map = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap defaultZoom={7} defaultCenter={{ lat: 49.93041, lng: 19.137835 }}>
            {/* 52.1 19.1343786 -  Poland's center*/}
            {props.isMarkerShown && (
                <>
                    <Marker position={{ lat: 50.03738, lng: 19.22136 }} />
                    <Marker position={{ lat: 49.82344, lng: 19.05431 }} />
                </>
            )}
        </GoogleMap>
    ))
);

export default function DeliverySection() {
    const languageContext = useContext(LanguageContext);

    return (
        <section className="main-section" id="delivery-section">
            <section id="delivery-content">
                <h1>{languageContext.languageData["delivery-title"]}</h1>
                <p>{languageContext.languageData["delivery-description"]}</p>
                <img id="delivery-section-image" src="assets/delivery-img.png" />
                <button className="big-button" id="delivery-pricing-button">
                    {languageContext.languageData.buttons["show-pricing"]}
                </button>
            </section>
            <ScrollAnimation className="animationWrapper" animateIn="animate__fadeIn">
                <Map
                    className="Map"
                    //isMarkerShown
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_GOOGLE_API_KEY}`}
                    containerElement={<div style={{ height: "95%", width: "100%", padding: "1em" }} />}
                    loadingElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%", borderRadius: "5%" }} />}
                />
            </ScrollAnimation>
        </section>
    );
}
