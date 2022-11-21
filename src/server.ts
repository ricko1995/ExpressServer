import express from "express";

const app = express();
const port = 1234;

app.get("/home", (req, res) => {
	console.log("get");
});
app.put("/home", (req, res) => {
	console.log("put");
});
app.post("/home", (req, res) => {
	console.log("post");
});

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
