const { getAllDoctors, getDoctorById, getPrivateDoctors, getPrivateDoctorById, getAppointments, getAppointmentById, updateAppointmentById, getAppointmentHistoryById } = require("../controllers/doctor.js");




const router = require("express").Router();

const { checkToken } = require("../auth/token_validation.js");
const { postAppointment } = require("../controllers/doctor.js");




router.get("/all",checkToken,getAllDoctors);
router.get("/all/:id",checkToken,getDoctorById);
router.get("/private",checkToken,getPrivateDoctors);
router.get("/private/:id",checkToken,getPrivateDoctorById);
router.get("/appointments",checkToken,getAppointments);
router.get("/appointments/:id",checkToken,getAppointmentById);
router.get("/appointments/history/:id",checkToken,getAppointmentHistoryById);
router.post("/book/appointments",postAppointment);
router.put("/appointments/:id",updateAppointmentById);

/*
router.get("/pridoc",getPrivateDoctors);
router.get("/pridoc/:id",getPrivateDoctorById);
*/

module.exports = router; 