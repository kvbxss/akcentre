import React, {useState} from "react"
import { GlobalStyle } from "../components/styles/GlobalStyles";
import HomeBar from "../components/HomeBar";
import Footer from "../components/Footer";
import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from '@fullcalendar/google-calendar';

// trzeba importować css do kazdego plugina manualnie
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Modal from'react-bootstrap/Modal'

const BookingCalendar = () => {

    // const [displayModal, setDisplayModal] = useState(false);
    // const [eventModal, setEventModal] = useState([]);
    // const hideModal = () => setDisplayModal(false);
  

  return ( 
    <>
    <GlobalStyle></GlobalStyle>
    <HomeBar></HomeBar>
  
       {/* {
         eventModal.map( (event, id) =>(
          <Modal show={displayModal} onHide={hideModal} key={id}>
          <Modal.Header closeButton>
            <Modal.Title>Trening</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{event.title}</h4>
            <h4>{event.website}</h4>
            <p>{event.start.toString()}</p>
            <p>{event.allDay.toString()}</p>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={hideModal}>
              Save Changes
            </Button>
          </Modal.Footer>
           </Modal>
         ))
         
       }  */}
         <CalendarContainer lightBg="true">
        <CalendarWrapper>
          <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "today, prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
              googleCalendarApiKey='AIzaSyBmDDMbae6MzPOuSI5QimNsTsqtoqNv8SQ'
              eventSources={[
                {
                        googleCalendarId:"suh24jba9jmae5npn329rcd8bk@group.calendar.google.com"
                      },
                ]}
              // eventClick={(e)=>{
              //   if(e){
              //     setDisplayModal(true)
              //     setEventModal([e.event])
              //     console.log(e.event)
              //   }
              // }}
            />
          </CalendarWrapper>
      </CalendarContainer>
  
  
  
  <Footer />
  </>
  )
};

const CalendarContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#0c0c0c" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const CalendarWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: flex;
`;

export default BookingCalendar;