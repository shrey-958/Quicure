const { getAllDoctors, getDoctorById, getPrivateDoctors, getPrivateDoctorById, getAppointments, getAppointmentById, updateAppointmentById } = require("../controllers/doctor.js");




const router = require("express").Router();

const { checkToken } = require("../auth/token_validation.js");
const { postAppointment } = require("../controllers/doctor.js");




router.get("/all",checkToken,getAllDoctors);
router.get("/all/:id",checkToken,getDoctorById);
router.get("/private",checkToken,getPrivateDoctors);
router.get("/private/:id",checkToken,getPrivateDoctorById);
router.get("/appointments",checkToken,getAppointments);
router.get("/appointments/:id",checkToken,getAppointmentById);
router.post("/book/appointments",checkToken,postAppointment);
router.put("/appointments/:id",checkToken,updateAppointmentById);

/*
router.get("/pridoc",getPrivateDoctors);
router.get("/pridoc/:id",getPrivateDoctorById);
*/

module.exports = router; 