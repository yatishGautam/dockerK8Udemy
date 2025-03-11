const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bodyparser = require("body-parser");
const { title } = require("process");

const app = express();

const port = 5001;
app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
	res.status(200).json({ message: "hello from the other side" });
});

app.post("/submit-feedback", (req, res, next) => {
	const { title, details } = req.body;
	if (!title) {
		res.send(400).json({ message: "invalid data" });
	}
	const time = new Date().toISOString().replace(/:/g, "-");
	const filename = `feedback-${time}`;
	const filepath = path.join(__dirname, "feedbacks", filename);

	if (!fs.existsSync(path.join(__dirname, "feedbacks"))) {
		fs.mkdirSync(path.join(__dirname, "feedbacks"));
	}

	const filecontent = `Title- ${title}\n\nDetails- ${details}\n\nrecorded at ${new Date().toLocaleString()}`;

	fs.promises
		.writeFile(filepath, filecontent)
		.then(() => {
			console.log("Success");
			res.status(200).send();
		})
		.catch((e) => {
			console.log("error ", e);
			res.status(500).send();
		});
});

app.listen(port, () => {
	console.log(`server started at ${port}`);
});
