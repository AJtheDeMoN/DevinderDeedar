import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Switch,
  Spinner,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BASE_URL;

export default function SimpleCard() {
  const [Article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [paragraphs, setParagraphs] = useState([]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/article/${id}/`, { withCredentials: true })
      .then((res) => {
        console.log("Received articles data:", res.data);
        setArticle(res.data);
        setParagraphs(res.data.content.split("<p>"));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className={`${darkMode?"bg-black":"bg-white"} pb-12`}>
      <div className="flex justify-end p-4">
        <span className={`${!darkMode?"text-black":"text-white"} mr-2`}>light mode</span><Switch onChange={toggleDarkMode} checked={darkMode}/> <span className={`${!darkMode?"text-black":"text-white"} ml-2`}>dark mode</span>
      </div>
      {loading ? (
        <Spinner color="blue" className="m-auto min-h-screen" />
      ) : (
        <Card
          className={`mx-auto max-w-screen-xl min-h-screen ${
            darkMode ? "bg-gray-900 text-white" : "bg-amber-50 text-black bg-opacity-50"
          } `}
        >
          <CardBody>
            <Typography
              variant="h4"
              color={darkMode ? "white" : "blue-gray"}
              className="mb-0 text-center punjabi-semibold text-4xl"
            >
              {Article.title}
            </Typography>
            <Typography
              variant="h6"
              color={darkMode ? "white" : "blue-gray"}
              className="mb-4 text-center punjabi-medium text-2xl"
            >
              {Article.author}
            </Typography>
            {paragraphs.map((paragraph, index) => (
                <div>
            <Typography key={index} className="punjabi-normal text-xl">
                {paragraph.trim()}<br />
            </Typography>
            <Typography >
                <br />
            </Typography>
            </div>
        ))}
          </CardBody>
        </Card>
      )}
    </div>
  );
}
