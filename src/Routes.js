import { createBrowserRouter } from "react-router-dom";
import { useContext, lazy, Suspense } from "react";

import NavBar from "./Components/Client/Landing/NavBar";
import Loading from "./Components/Loading";
import SystemSignIn from "./Pages/System/Auth/SignIn/SystemSignIn";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

import "react-international-phone/style.css";
import SystemIndex from "./Pages/System/index/SystemIndex";
import AllUsersChart from "./Pages/System/Users/AllUsersChart/AllUsersChart";
import { CountriesChart } from "./Pages/System/Users/AllUsersChart/CountriesChart";
import CountryChart from "./Pages/System/Users/AllUsersChart/CountryChart";
import { AllRequestsCharts } from "./Pages/System/Requests/AllRequestsChart/AllRequestsCharts";
import AllRequests from "./Pages/System/Requests/AllRequests/AllRequests";
import SystemUsers from "./Pages/System/Users/UserDetails/SystemUsers";
import DesignRequest from "./Pages/System/Requests/DesignRequest/DesignRequest";
import DesignCasesRequest from "./Pages/System/Requests/DesignRequest/DesignCasesRequest/DesignCasesRequest";
import ReviewRequest from "./Pages/System/Requests/ReviewRequest.jsx/ReviewRequest";
import ReviewCasesRequest from "./Pages/System/Requests/ReviewRequest.jsx/ReviewCasesRquest/ReviewCasesRequest";
import AllCLients from "./Pages/System/Clients/AllClients/AllCLients";
import AllClientsChart from "./Pages/System/Clients/AllClientsChart/AllClientsChart";
import InsideClients from "./Pages/System/Clients/InsideClients/InsideClients";
import OutSideClients from "./Pages/System/Clients/OutSideClients/OutSideClients";
import ClientDetails from "./Pages/System/Clients/ClientDetails/ClientDetails";
import Home from "./Pages/index";
import AllMeetings from "./Pages/System/Meetings/AllMeetings/AllMeetings";

import AllProjects from "./Pages/System/Projects/AllProjects/AllProjects";
import AllProjectsChart from "./Pages/System/Projects/AllProjectsChart/AllProjectsChart";
import MainProjects from "./Pages/System/Projects/MainProjects/MainProjects";
import NestedMainProjects from "./Pages/System/Projects/MainProjects/NestedMainProjects";
import { MainSystem } from "./Pages/System/Main/MainSystem";
import AccountaingIndex from "./Pages/System/Accountaing/AccountaingIndex/AccountaingIndex";
import Treasury from "./Pages/System/Accountaing/Treasury/Treasury";
import Revenues from "./Pages/System/Accountaing/Revenues/Revenues";

import Invoice from "./Pages/System/Accountaing/Invoice/Invoice";
import Expenses from "./Pages/System/Accountaing/Expenses/Expenses";
import ExpensesDetails from "./Pages/System/Accountaing/Expenses/ExpensesDetails/ExpensesDetails";
import RevenusDetails from "./Pages/System/Accountaing/Revenues/RevenusDetails/RevenusDetails";
import HrIndex from "./Pages/System/Hr/HrIndex/HrIndex";
import AllEmployees from "./Pages/System/Hr/AllEmployees/AllEmployees";
import HolidayMangment from "./Pages/System/Hr/HolidayMangment/HolidayMangment";
import EmployeesServices from "./Pages/System/Hr/EmployeesServices/EmployeesServices";
import MainEmployees from "./Pages/System/Hr/MainEmployees/MainEmployees";
import EmployeesManagment from "./Pages/System/Hr/EmployeesManagment/EmployeesManagment";
import Test from "./Components/Test";
import ReportManagement from "./Pages/System/Projects/ReportManagement/ReportManagement";
import NestedReportMangment from "./Pages/System/Projects/ReportManagement/NestedReportMangment/NestedReportMangment";
import Settings from "./Pages/System/Settings/Settings";
import Reception from "./Pages/System/Settings/Reception/Reception";
import Orders from "./Pages/System/Settings/Orders/Orders";
import Accounating from "./Pages/System/Settings/Accounating/Accounating";
import CitizenServices from "./Pages/System/Settings/CitizenServices/CitizenServices";
import TimeLine from "./Pages/System/Settings/TimeLine/TimeLine";
import { SettingContextProvider } from "./Context/SettingContext";
import PlanModel from "./Pages/System/PlanModel";
import PlansAnalytics from "./Pages/System/PlanModel/PlansAnalytics";
import Projects from "./Pages/System/PlanModel/Projects";
import Tasks from "./Pages/System/PlanModel/Tasks";
import NewProject from "./Pages/System/PlanModel/Projects/NewProject";
import EditProject from "./Pages/System/PlanModel/Projects/EditProject";
import ProjectContextProvier from "./Pages/System/PlanModel/context/ProjectContext";
import TableContextProvder from "./Pages/System/PlanModel/context/TableContext";
import ShowProject from "./Pages/System/PlanModel/Projects/ShowProject";
import Plans from "./Pages/System/Plans";
import PlansProjects from "./Pages/System/Plans/Projects";
import AddProject from "./Pages/System/Plans/Projects/AddProject";
import HrUsers from "./Components/System/Hr/UserDetails/HrUsers";
import ChatIndex from "./Pages/System/Chat/index/ChatIndex";
import AllChats from "./Pages/System/Chat/index/AllChats";
import UserChat from "./Pages/System/Chat/UserChat/UserChat";
import Profile from "./Pages/System/Profile/Profile";
import UserContext from "./Context/userProvider";

const SignUP = lazy(() => import("./Pages/DashBoard/SignUP/SignUP"));
const SignIn = lazy(() => import("./Pages/DashBoard/SignIn/SignIn"));

const ConfirmWithCode = lazy(() =>
  import("./Pages/DashBoard/ConfirmWithCode/ConfirmWithCode")
);
const ForgetPassword = lazy(() =>
  import("./Pages/DashBoard/ForgetPassword/ForgetPassword")
);

const router = createBrowserRouter([
  // for testing prouprs
  {
    path: "/",
    // path: "/System/SignIn",
    element: <SystemSignIn />,
  },
  // Home
  {
    path: "/home",
    // path: "/",
    element: <Home />,
  },
  // DashBoard
  {
    path: "/Dashboard/SignUP",
    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <SignUP />
      </Suspense>
    ),
  },
  {
    path: "/Dashboard/ConfirmWithCode",
    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <ConfirmWithCode />
      </Suspense>
    ),
  },
  {
    path: "/Dashboard/ForgetPassword",
    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <ForgetPassword />
      </Suspense>
    ),
  },
  {
    path: "/Dashboard/SignIn",
    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <SignIn />
      </Suspense>
    ),
  },

  //system routes
  {
    path: "/System/SignIn",
    element: <SystemSignIn />,
  },
  {
    path: "",

    element: (
      <UserContext>
        {" "}
        <SystemIndex />
      </UserContext>
    ),
    children: [
      // system index (main)
      { path: "/System/index", element: <MainSystem /> },
      { path: "/System/index/:deprtmentType", element: <MainSystem /> },
      //system  users
      { path: "/System/users/:id", element: <SystemUsers /> },
      {
        path: "",
        element: <AllUsersChart />,
        children: [
          { path: "/System/Users/index", element: <CountriesChart /> },
          {
            path: "/System/AllUsers/Country/:CountryName",
            element: <CountryChart />,
          },
        ],
      },
      // system Requests
      {
        path: "",
        element: <AllRequests />,
        children: [
          {
            path: "/System/Requests/index",
            element: (
              <Suspense fallback={<Loading />}>
                {" "}
                <AllRequestsCharts />{" "}
              </Suspense>
            ),
          },
          {
            path: "System/Requests/Design",
            element: <DesignRequest />,
          },
          {
            path: "System/Requests/Design/:DesignProjectType",
            element: <DesignCasesRequest />,
          },
          {
            path: "System/Requests/Review",
            element: <ReviewRequest />,
          },
          {
            path: "System/Requests/Review/:ReviewProjectType",
            element: <ReviewCasesRequest />,
          },
        ],
      },
      // System Clients
      {
        path: "",
        element: <AllCLients />,
        children: [
          { path: "/System/Clients/index", element: <AllClientsChart /> },
          { path: "/System/Clients/Inside", element: <InsideClients /> },
          { path: "/System/Clients/Inside/Design", element: <InsideClients /> },
          { path: "/System/Clients/Inside/Review", element: <InsideClients /> },
          { path: "/System/Clients/Outside", element: <OutSideClients /> },
          {
            path: "/System/Clients/Outside/Design",
            element: <OutSideClients />,
          },
          {
            path: "/System/Clients/Outside/Review",
            element: <OutSideClients />,
          },
          { path: "/System/ClintDetails/:id", element: <ClientDetails /> },
        ],
      },
      // System Meetings
      { path: "/System/Meetings/index", element: <AllMeetings /> },
      // System Projects
      {
        path: "",
        element: <AllProjects />,
        children: [
          { path: "/System/Projects/index", element: <AllProjectsChart /> },
          {
            path: "/System/Projects/Main/:ProjectTime",
            element: <MainProjects />,
          },
          // { path: "/System/Projects/Main/ReportManagement", element: <ReportManagement /> },
          {
            path: "/System/Projects/Main/ReportManagement/:projectType",
            element: <NestedReportMangment />,
          },
          {
            path: "/System/Projects/Main/:ProjectTime/:ProjectType",
            element: <NestedMainProjects />,
          },
        ],
      },
      // System Accounating
      {
        path: "",
        element: <AccountaingIndex />,
        children: [
          { path: "/System/Accounating/index", element: <Treasury /> },
          { path: "/System/Accounating/Revenues", element: <Revenues /> },
          {
            path: "/System/Accounating/Revenues/:RevenueType",
            element: <RevenusDetails />,
          },
          { path: "/System/Accounating/Expenses", element: <Expenses /> },
          {
            path: "/System/Accounating/Expenses/:ExpensesType",
            element: <ExpensesDetails />,
          },
        ],
      },
      // System Hr
      {
        path: "",
        element: <HrIndex />,
        children: [
          { path: "/System/Hr/index", element: <MainEmployees /> },
          {
            path: "/System/Hr/EmployeesManagment",
            element: <EmployeesManagment />,
          },
          {
            path: "/System/Hr/Employees/:CountryName",
            element: <AllEmployees />,
          },
          {
            path: "/System/Hr/Users",
            element: <HrUsers />,
          },
          { path: "/System/Hr/HolidayMangment", element: <HolidayMangment /> },
          {
            path: "/System/Hr/EmployeesServices",
            element: <EmployeesServices />,
          },
        ],
      },
      //System settings
      {
        path: "/System/Settings",
        element: (
          <SettingContextProvider>
            {" "}
            <Settings />
          </SettingContextProvider>
        ),
        children: [
          { path: "/System/Settings/Reception", element: <Reception /> },
          { path: "/System/Settings/Orders", element: <Orders /> },
          { path: "/System/Settings/Accounating", element: <Accounating /> },
          {
            path: "/System/Settings/CitizenServices",
            element: <CitizenServices />,
          },
          { path: "/System/Settings/TimeLine", element: <TimeLine /> },
        ],
      },
      //System Plans
      // {
      //   path: "/System/plans",
      // element: (
      //   <ProjectContextProvier>
      //     <TableContextProvder>
      //       <PlanModel />
      //     </TableContextProvder>
      //   </ProjectContextProvier>
      // ),
      //   children: [
      //     { index: true, element: <PlansAnalytics /> },
      //     {
      //       path: "projects",
      //       element: <Projects />,
      //       children: [
      //         { path: "new-project", element: <NewProject /> },
      //         { path: "edit-project", element: <EditProject /> },
      //         { path: "show-project", element: <ShowProject /> },
      //       ],
      //     },
      //     { path: "tasks", element: <Tasks /> },
      //   ],
      // },
      // {
      //   path: "/System/plans/show-project/:projectId",
      //   element: <ShowProject />,
      // },

      //System Plans
      {
        path: "/System/plans",
        element: (
          <ProjectContextProvier>
            <TableContextProvder>
              <Plans />
            </TableContextProvder>
          </ProjectContextProvier>
        ),
      },
      //System Plans Projects
      {
        path: "/System/plans/projects",
        element: (
          <ProjectContextProvier>
            <TableContextProvder>
              <PlansProjects />
            </TableContextProvder>
          </ProjectContextProvier>
        ),
      },
      {
        path: "/System/plans/projects/add-project",
        element: <AddProject />,
      },
      {
        path: "/System/plans/show-project/:projectId",
        element: <ShowProject />,
      },
      {
        path: "/System/plans/edit-project/:projectId",
        element: <EditProject />,
      },
      {
        path: "/System/plans/tasks",
        element: (
          <ProjectContextProvier>
            <TableContextProvder>
              <PlansProjects />
            </TableContextProvder>
          </ProjectContextProvier>
        ),
      },
      // system Chat
      {
        path: "",
        element: <ChatIndex />,
        children: [
          { path: "/System/Chat/index", element: <AllChats /> },
          { path: "/System/Chat/:country/:id", element: <UserChat /> },
        ],
      },
      //Profile
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;
