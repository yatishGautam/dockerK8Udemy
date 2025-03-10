const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
	console.log("server hit");
	res.status(200).json({ message: "hello from ther server" });
});

app.listen(port, () => {
	console.log(`express server started at ${port}`);
});
