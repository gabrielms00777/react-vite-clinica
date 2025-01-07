import { Route, Routes } from "react-router"
import { Home } from "./pages/site/Home"
import { Services } from "./pages/site/Services"
import { Contact } from "./pages/site/Contact"
import { Login } from "./pages/site/Login"
import { SiteLayout } from "./components/layouts/SiteLayout"
import { AdminLayout } from "./components/layouts/AdminLayout"
import { UsersIndex } from "./pages/admin/users/Index"
import { AdminDashboard } from "./pages/admin/dashboard/Dashboard"
import { AdminSettings } from "./pages/admin/settings/Index"
import { UsersCreate } from "./pages/admin/users/Create"
import { PatientIndex } from "./pages/doctor/patients/Index"
import { DoctorLayout } from "./components/layouts/DoctorLayout"
import { ScheduleIndex } from "./pages/doctor/schedule/Index"
import { DoctorDashboard } from "./pages/doctor/dashboard/Index"
import { ReceptionistLayout } from "./components/layouts/ReceptionistLayout"
import { ReceptionistDashboard } from "./pages/reception/dashboard/Index"
import { Appointments } from "./pages/reception/appointments/Index"
import { Profile } from "./pages/shared/Profile"
import { Notifications } from "./pages/shared/Notifications"
import { NotFound } from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Admin Routes */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UsersIndex />} />
        <Route path="users/create" element={<UsersCreate />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="profile" element={<Profile />} />
      </Route>


      {/* Doctor Routes */}
      <Route path="doctor" element={<DoctorLayout />}>
        <Route index element={<DoctorDashboard />} />
        <Route path="patients" element={<PatientIndex />} />
        <Route path="schedule" element={<ScheduleIndex />} />
        <Route path="profile" element={<Profile />} />
      </Route>


      {/* Receptionist Routes */}
      <Route path="reception" element={<ReceptionistLayout />}>
        <Route index element={<ReceptionistDashboard />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="profile" element={<Profile />} />
      </Route>


      {/* Shared Routes */}
      <Route path="profile" element={<Profile />} />
      <Route path="notifications" element={<Notifications />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes >
  )
}

