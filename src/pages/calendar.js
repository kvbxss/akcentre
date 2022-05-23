import React from "react"
import { GlobalStyle } from "../components/styles/GlobalStyles";
import HomeBar from "../components/HomeBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Loadable from "react-loadable";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from '@fullcalendar/google-calendar';

// trzeba importować css do kazdego plugina manualnie
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";




const BookingCalendar = () => {

 
  
  const LoadableCalendar = Loadable({
    loader: () => import('@fullcalendar/react'),
    loading: () => <div>Loading...</div>,
    render(loaded, props) {
        let Cal = loaded.default;
        return <Cal {...props} />
    }
  })

  return ( 
    <>
    <GlobalStyle></GlobalStyle>
    <HomeBar></HomeBar>
  
       
         <CalendarContainer lightBg="true">
        <CalendarWrapper>
          <LoadableCalendar
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