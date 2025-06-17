'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

import styles from './book-appointment-map.module.scss';

const MAP_MARKERS = [
  {
    lng: 27.667081397459874,
    lat: 53.941168699838144,
  },
  {
    lng: 27.69716561506481,
    lat: 53.947581517870105,
  },
  {
    lng: 27.682665762041292,
    lat: 53.946026680083826,
  },
];

const MAP_INITIAL_PARAMS = {
  lng: 27.685,
  lat: 53.943,
  zoom: 12.5,
};

export default function BookAppointmentMap() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_KEY;
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: [MAP_INITIAL_PARAMS.lng, MAP_INITIAL_PARAMS.lat],
        zoom: MAP_INITIAL_PARAMS.zoom,
      });

      MAP_MARKERS.map((marker) => {
        if (mapRef.current) {
          return new mapboxgl.Marker({
            color: '#ff0000',
          })
            .setLngLat([marker.lng, marker.lat])
            .addTo(mapRef.current);
        }
      });

      return () => {
        mapRef.current?.remove();
      };
    }
  }, []);
  return (
    <section className={styles.bookAppointmentMap}>
      <div id="map-container" ref={mapContainerRef} className={styles.map} />
      <div className={styles.content}>
        <div>
          <p>Our Address:</p>
          <p className={styles.text}>
            Luxe Animal Spa
            <br />
            80 Smithe St
            <br />
            Vancouver, BC
            <br />
            V6B 1M7
          </p>
        </div>
        <div>
          <p>Hours of Operation:</p>
          <p className={styles.text}>
            Sunday - Closed
            <br />
            Monday 10 a.m.-5:30 p.m.
            <br />
            Tuesday 10 a.m.-5:30 p.m.
            <br />
            Wednesday 10 a.m.-5:30 p.m.
            <br />
            Thursday 10 a.m.-5:30 p.m.
            <br />
            Friday 10 a.m.-5:30 p.m.
            <br />
            Saturday 10 a.m.-5:30 p.m.
          </p>
        </div>
      </div>
    </section>
  );
}
