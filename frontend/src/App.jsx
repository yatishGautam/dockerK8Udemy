import "./App.css";
import { useState } from "react";

function App() {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center">
			<header className="w-full bg-purple-900 text-white py-4 text-center text-2xl font-bold">
				My Site
			</header>
			<div className="mt-10 bg-white p-6 rounded-2xl shadows-lg w-[400px]">
				<h2 className="text-xl font-bold mb-4">Your Feedback</h2>
				<label className="block text-sm font-medium mb-1">Title</label>
				<input
					type="text"
					className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
				></input>
				<label className="block text-sm font-medium mb-1">Details</label>
				<textarea className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md  focus:border-purple-500"></textarea>
				<button className="block mt-4 rounded-md bg-purple-900 py-4 px-6 text-white hover:bg-purple-800">
					save
				</button>
			</div>
		</div>
	);
}

export default App;
