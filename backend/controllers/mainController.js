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

const createSummary = async(req,res)=>{

}
module.exports = {createTranscript,getTranscript,createSummary};