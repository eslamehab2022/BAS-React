import React, { useContext, useEffect, useMemo, useState } from "react";
import styles from "./AllMeetings.module.css";
import "./MeettingStyles.css";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import AddUserButton from "../../../../Components/System/AddUserButton/AddUserButton";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import { Container, Form, Image, Modal } from "react-bootstrap";
import { showAddUpdateUser } from "../../../../Context/CheckAddUpdateUserVisability";
import Select from "../../../../Components/FormHandler/Select";
import { UseSelect } from "../../../../hooks";
import { AddMeeting } from "../../../../Components/System/Meetings/AddMeeting/AddMeeting";
import EditDeleteMeeting from "../../../../Components/System/Meetings/EditDeleteMeeting/EditDeleteMeeting";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { getAllEvents } from "../../../../helper/fetchers/events";

const AllMeetings = () => {
  require("globalize/lib/cultures/globalize.culture.ar-AE");

  const [showEditDeleteModal, setShowEditDeleteModal] = useState(false);
  const [AllEvents, setAllEvents] = useState(null);
  const [view, setView] = useState(false);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const localizer = momentLocalizer(moment);
  const DnDCalendar = withDragAndDrop(Calendar);

  const lang = {
    "ar-AE": {
      week: "أسبوع",
      work_week: "أسبوع العمل",
      day: "يوم",
      month: "شهر",
      previous: "سابق",
      next: "التالي",
      today: "اليوم",
      agenda: "جدول أعمال",
      showMore: (total) => `+${total} إضافي`,
    },
  };

  // get the selected metting to handle (edit-delete)
  const handleEditMeeting = (event) => {
    setSelectedEventId(event.id);
    setShowEditDeleteModal(true);
    console.log(selectedEventId);
  };

  const allEvents = [
    {
      id: 1,
      title: "Conference",
      start: new Date("2024-01-22"),
      end: new Date("2024-01-22"),
      desc: "Big conference for important people",
      allDay: true,
    },
    {
      id: 2,
      title: "assign Tasks",
      start: new Date("2024-01-25"),
      end: new Date("2024-01-26"),
      desc: "Pre-meeting meeting, to prepare for the meeting",
      allDay: false,
    },
  ];
  const [events, setEvents] = useState(allEvents);
  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);

    alert(`${event.title} was dropped `);
  };

  const resizeEvent = ({ event, start, end }) => {
    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setEvents(nextEvents);

    //alert(`${event.title} was resized to ${start}-${end}`)
  };
  function onEventDrop({ event, start, end, allDay }) {}
  function onEventResize({ event, start, end, allDay }) {}

  const getEvents = async () => {
    const { data } = await getAllEvents();
  };

  useEffect(() => {}, []);

  return (
    <div>
      <EditDeleteMeeting
        id={selectedEventId}
        showEditDeleteModal={showEditDeleteModal}
        setShowEditDeleteModal={setShowEditDeleteModal}
      />

      <SystemControler
        child={
          <>
            <button
              onClick={() => {
                setView(true);
              }}
              className="add-user-button"
            >
              اضافة جديدة
            </button>
          </>
        }
      />

      <div
        // className={styles.cleanderbg}
        className="bg-[#1E1E2D] h-[801px] rounded-[17px] meeting scrollbar-none overflow-scroll"
      >
        <AddMeeting view={view} setView={setView} />

        <DnDCalendar
          popup
          onSelectEvent={handleEditMeeting}
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          onEventDrop={moveEvent}
          onEventResize={resizeEvent}
          draggableAccessor={(event) => true}
          style={{ height: "100%", margin: "0px", padding: "10px" }}
          messages={{
            week: "أسبوع",
            work_week: "أسبوع العمل",
            day: "يوم",
            month: "شهر",
            previous: "سابق",
            next: "التالي",
            today: "اليوم",
            agenda: "جدول أعمال",
          }}
        />
      </div>
    </div>
  );
};

export default AllMeetings;
