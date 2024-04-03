import { useEffect, useState } from "react";
import NoteContainer from "./NoteContainer";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-hot-toast";

// LLM Model const variables
const API_KEY = import.meta.env.VITE_API_KEY;

const systemMessage = {
  role: "system",
  content:
    "Structure the note into three sections. The first section is about questions about the note, and the second section is about structuring the note into a proper study note (by considering the relevant information and its context). Structure the note with html tags to style the note with headings, bullet points, and paragraphs. Give the first section under the 'Questions From Note' topic, make questions from the note, and stick them into the note itself. add 🤔 emoji before each question. add two br tags after each question. Give the second section under 'Structured Note' topic and structure note in the most understandable way with a proper heading for the topic in h2 or h3 and use Bold tag for sure. use br tags for propoer spacing. Third is section name as 'Summary Note'. In third section include the summary of whole note.",
};

const isValidYouTubeUrl = (url) => {
  // Regular expression to match YouTube video URLs
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[\w-]{11}$/;
  return youtubeRegex.test(url);
};
function NewNote() {
  // variables declarations
  const [ytUrl, setYtUrl] = useState("");
  const [structuredNoteWithQs, setStructuredNoteWithQ] = useState("");
  const [noteSummary, setNoteSummary] = useState("");
  const [structuredNote, setStructuredNote] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const ytUrlHandler = async () => {
    setNoteSummary("");
    setStructuredNote("");
    setQuestions("");
    // send url to backend
    if (ytUrl && isValidYouTubeUrl(ytUrl)) {
      setLoading(true);
      await axios
        .post(`${import.meta.env.VITE_SERVER_URL}/api/create-transcript`, {
          zip: ytUrl,
        })
        .then((res) => {
          strucutreTranscriptWithLlm(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setLoading(false);
      toast.error("Invalid YouTube URL 🙁", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgba(51.41, 51.41, 51.41, 0.78)",
          color: "#fff",
        },
      });
    }
  };

  // LLM executions-----------------------------------------

  const strucutreTranscriptWithLlm = async (message) => {
    // structure the transcript
    // Process the transcript with ChatGPT

    await processMessage(message);
  };

  // Process the message to send to ChatGPT
  async function processMessage(message) {
    // Set up the request body for the ChatGPT API
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, { role: "user", content: message }],
    };

    // Fetch from ChatGPT
    setLoading(true);
    const data = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    const jsonData = await data.json();

    // Update the structuredNoteWithQs variables with the response from ChatGPT
    setStructuredNoteWithQ(jsonData.choices[0].message.content);
  }

  useEffect(() => {
    //check whether structuredNoteWithQs has the structured note or not
    if (
      structuredNoteWithQs &&
      structuredNoteWithQs.includes("Structured Note") &&
      structuredNoteWithQs.includes("Summary Note")
    ) {
      // Extract the structured note
      const structuredNote = structuredNoteWithQs
        .split("Structured Note")[1]
        .split("Summary Note")[0]
        .trim();
      setStructuredNote(structuredNote); // Set structured note variable
      // Send the structured note to the backend to generate summary
      setNoteSummary(structuredNoteWithQs.split("Summary Note")[1]);
      // axios
      //   .post("http://localhost:3000/api/create-summary", {
      //     noteToSummarize: noteToSummarize,
      //   })
      //   .then((response) => {
      //     setNoteSummary(response.data.summary);
      //     // console.log("Summary :" +noteSummary);
      //   })
      //   .catch((error) => {
      //     console.error("Error generating summary:", error);
      //   });

      //split the qustions part from structuredNoteWithQs
      if (!questions && structuredNoteWithQs.includes("Questions From Note")) {
        const questions = structuredNoteWithQs
          .split("Structured Note")[0]
          .split("Questions From Note")[1]
          .trim();

        // console.log("ques :" + questions);
        setQuestions(questions);
      }

      // if all the notes are filled with information set the loading to false
      if (structuredNote && noteSummary && questions) {
        setLoading(false);
      }
    }
  }, [structuredNoteWithQs, noteSummary, questions]);

  return (
    <div className="sm:ml-64">
      {/* New note container */}
      <div className="mt-20 h-[calc(100vh-5rem)] bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white">
        {/* Container */}
        <div className="flex h-full flex-col">
          {/*Youtube link and Generate button container*/}
          <div className="flex place-content-center">
            <div className="relative w-full flex-col rounded-lg bg-slate-100 p-2 sm:w-4/5 lg:w-2/5">
              <input
                type="text"
                placeholder="YouTube link goes here..."
                className="w-full bg-slate-100 text-slate-900 focus:outline-none"
                onChange={(e) => setYtUrl(e.target.value)}
              />
              <button
                className="absolute right-1 top-1 rounded-lg bg-blue-600 px-3.5 py-1 shadow-lg hover:bg-blue-500 hover:shadow-blue-500/40"
                onClick={ytUrlHandler}
              >
                Generate
              </button>
            </div>
            {/* display clip loader if loading */}
            {loading && <ScaleLoader color="#398ece" className="ml-2" />}
          </div>
          {/* Note Containers */}
          <NoteContainer
            structuredNote={structuredNote}
            summary={noteSummary}
            questions={questions}
          />
        </div>
      </div>
    </div>
  );
}

export default NewNote;
