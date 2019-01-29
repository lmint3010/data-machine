const express = require("express");
const router = express.Router();

const {
  onAdd,
  onLoad,
  onSearch,
  onAddLang,
  onEditContent,
  handleEditContent,
  onDeleteContent,
  ShowAllLang,
  DeleteLang
} = require("../controller/indexController");

/* GET home page. */
router.get("/", onLoad);

router.post("/add", onAdd);

router.get("/search", onSearch);

router.post("/add-lang", onAddLang);

router.get("/country-code", ShowAllLang);

router.get("/edit-content/:engId/:langId/:langCode", onEditContent);

router.post("/update-content/:engId/:langId", handleEditContent);

router.get("/delete-content/:engId/:langId/:uid", onDeleteContent);

router.get("/delete-lang/:langId", DeleteLang);

module.exports = router;