const { YoutubeTranscript } = require("youtube-transcript");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const createTranscript = async (req, res) => {
  const ytUrl = req.body.zip.toString();

  // Generating YouTube transcript
  await YoutubeTranscript.fetchTranscript(ytUrl)
    .then((transcript) => {
      res.send(transcript.map((entry) => entry.text).join(" "));
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Error in generating YouTube transcript" });
      return;
    });
};

// async function query(data) {
//   const response = await fetch(
//     "https://api-inference.huggingface.co/models/Falconsai/text_summarization",
//     {
//       headers: {
//         Authorization: "Bearer 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",
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify(data),
//     }
//   );

//   const result = await response.json();
//   return result;
// }

// const createSummary = async (req, res) => {
//   const count = 0;
//   try {
//     // Perform summarization
//     const summarizationResult = await query({
//       inputs: req.body.noteToSummarize,
//     });

//     console.log("Summarization Result:", summarizationResult[0].summary_text);

//     // Send the summarization result as response
//     res.send({ summary: summarizationResult[0].summary_text });
//   } catch (error) {
//     count
//     console.error("Error performing summarization:", error);
//     res.status(500).json({ error: "Error performing summarization" });


//     createSummary(req, res);
//   }
// };

module.exports = { createTranscript };
