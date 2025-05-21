/*import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tickets = [
  {
    id: 1,
    from: "HYD",
    to: "RJY",
    date: "2025-06-01",
    time: "17:00",
    passenger: "Hema Desuza",
    flight: "AA123",
    seat: "12A",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Experience the Nomads Difference in Your Travel Planning. This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features."
  },
  {
    id: 2,
    from: "LHR",
    to: "DXB",
    date: "2025-06-02",
    time: "14:30",
    passenger: "Jane Smith",
    flight: "EK202",
    seat: "7B",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    description: "Fly in comfort and style. Enjoy premium services and seamless travel experiences with us."
  },
  {
    id: 3,
    from: "DEL",
    to: "BOM",
    date: "2025-06-03",
    time: "19:15",
    passenger: "Amit Kumar",
    flight: "AI456",
    seat: "22C",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Your journey, our priority. Discover new destinations with exclusive offers and personalized service."
  },
];

function FlightTicketCard({ ticket, index, total }) {
  return (
    <div style={{
      display: "flex",
      background: "#f3f4f6",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      minHeight: 320,
      margin: "auto",
      maxWidth: 1100,
    }}>
      {/* Left: Image *}
      <div style={{ flex: "1 1 45%", minWidth: 320, background: "#ddd" }}>
        <img
          src={ticket.image}
          alt="destination"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      {/* Right: Details *}
      <div style={{
        flex: "1 1 55%",
        display: "flex",
        flexDirection: "column",
        padding: "32px 32px 24px 24px",
        background: "#ededed",
        position: "relative"
      }}>
        {/* Barcode & index *}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{
            width: 48, minWidth: 48, marginRight: 24, background: "#ffb300", borderRadius: "12px 0 0 12px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 180
          }}>
            <div style={{
              width: 28, height: 140, background: "repeating-linear-gradient(90deg, #222 0 2px, transparent 2px 4px)",
              margin: "20px 0"
            }} />
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 500, color: "#222" }}>{index + 1}/{total}</div>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>{ticket.from} → {ticket.to}</div>
            <div style={{ fontSize: 16, color: "#444", marginBottom: 12 }}>{ticket.description}</div>
            <div style={{ display: "flex", gap: 24, fontSize: 15, marginBottom: 8 }}>
              <div><b>Date:</b> {ticket.date}</div>
              <div><b>Time:</b> {ticket.time}</div>
              <div><b>Seat:</b> {ticket.seat}</div>
            </div>
            <div style={{ fontSize: 15, color: "#555" }}>
              <b>Passenger:</b> {ticket.passenger} &nbsp; <b>Flight:</b> {ticket.flight}
            </div>
          </div>
        </div>
        {/* Button *}
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
          <button style={{
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "0 0 24px 24px",
            padding: "14px 32px",
            fontSize: 18,
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}>
            PLAN YOUR TRIP <span style={{ fontSize: 26, marginLeft: 10 }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FlightTicketCarousel() {
  return (
    <div style={{ maxWidth: 1200, margin: "40px auto" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        style={{ paddingBottom: "40px" }}
      >
        {tickets.map((ticket, idx) => (
          <SwiperSlide key={ticket.id}>
            <FlightTicketCard ticket={ticket} index={idx} total={tickets.length} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}*/

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tickets = [
  {
    id: 1,
    from: "Discover Hidden Gems and Off-the-Beaten-Path Destinations",
    /*to: "RJY",*/
    date: "2025-06-01",
    time: "17:00",
    passenger: "Hema Desuza",
    flight: "AA123",
    seat: "12A",
    image: "charminar.jpg",
    description: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features."
  },
  {
    id: 2,
    from: "LHR",
    to: "DXB",
    date: "2025-06-02",
    time: "14:30",
    passenger: "Ajay Smith",
    flight: "EK202",
    seat: "7B",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    description: "Fly in comfort and style. Enjoy premium services and seamless travel experiences with us."
  },
  {
    id: 3,
    from: "DEL",
    to: "BOM",
    date: "2025-06-03",
    time: "19:15",
    passenger: "Bhavana Khan",
    flight: "AI456",
    seat: "22C",
    image: "charminar.jpg",
    description: "Your journey, our priority. Discover new destinations with exclusive offers and personalized service."
  },
];

function FlightTicketCard({ ticket, index, total }) {
  return (
    <div style={{
      display: "flex",
      background: "#f3f4f6",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      minHeight: 320,
      margin: "auto",
      maxWidth: 1100,
    }}>
      {/* Left: Image */}
      <div style={{ flex: "1 1 45%", minWidth: 320, background: "#ddd" }}>
        <img
          src={ticket.image}
          alt="destination"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      {/* Right: Details */}
      <div style={{
        flex: "1 1 55%",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 0px 0px",
        background: "#ededed",
        position: "relative"
      }}>
        {/* Barcode & index */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{
            width: 68, minWidth: 68, marginRight: 24, background: "#e15a00", borderRadius: "24px 0 0 24px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 300
          }}>
            <br></br>
            <div style={{
              width: 28, height: 240, background: "repeating-linear-gradient(90deg, #222 0 2px, transparent 2px 4px)",
              margin: "20px 0"
            }} />
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 500, color: "#222" }}>{index + 1}/{total}</div>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>{ticket.from} → {ticket.to}</div>
            <div style={{ fontSize: 16, color: "#444", marginBottom: 12 }}>{ticket.description}</div>
            <div style={{ display: "flex", gap: 24, fontSize: 15, marginBottom: 8 }}>
              <div><b>Date:</b> {ticket.date}</div>
              <div><b>Time:</b> {ticket.time}</div>
              <div><b>Seat:</b> {ticket.seat}</div>
            </div>
            <div style={{ fontSize: 15, color: "#555" }}>
              <b>Passenger:</b> {ticket.passenger} &nbsp; <b>Flight:</b> {ticket.flight}
            </div>
          </div>
        </div>
        {/* Button */}
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
          <button style={{
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "0 0 24px 24px",
            padding: "2px 10px",
            fontSize: 18,
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}>
            PLAN YOUR TRIP <span style={{ fontSize: 26, marginLeft: 10 }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FlightTicketCarousel() {
  return (
    <div style={{ maxWidth: 1200, margin: "40px auto" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        style={{ paddingBottom: "40px" }}
      >
        {tickets.map((ticket, idx) => (
          <SwiperSlide key={ticket.id}>
            <FlightTicketCard ticket={ticket} index={idx} total={tickets.length} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}