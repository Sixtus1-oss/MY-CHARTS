import { Router } from "express";
import {
  createBirthrate,
  createDeathrate,
  createEconomic,
  createHealthcarespendingrate,
  createPopulation,
  createSmokingrate,
  createTariffrate,
  readBirthrate,
  readDeathrate,
  readEconomic,
  readHealthcarespendingrate,
  readPopulation,
  readSmokingrate,
  readTariffrate,
} from "../controller/controller";
import { upload } from "../utils/multer";

const router: any = Router();

router.route("/create-economy").post(upload, createEconomic);
router.route("/read-economy").get(readEconomic);

router.route("/create-population").post(upload, createPopulation);
router.route("/read-population").get(readPopulation);

router.route("/create-population").post(upload, createBirthrate);
router.route("/read-population").get(readBirthrate);

router.route("/create-population").post(upload, createDeathrate);
router.route("/read-population").get(readDeathrate);

router.route("/create-population").post(upload, createTariffrate);
router.route("/read-population").get(readTariffrate);

router.route("/create-population").post(upload, createHealthcarespendingrate);
router.route("/read-population").get(readHealthcarespendingrate);

router.route("/create-population").post(upload, createSmokingrate);
router.route("/read-population").get(readSmokingrate);

export default router;
