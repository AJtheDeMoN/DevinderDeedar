import {
  Card,
  CardBody,
  Typography,
  Switch,
  Spinner,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BASE_URL;

export default function SimpleCard() {
  const [Proses, setProses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/prose/`, { withCredentials: true })
      .then((res) => {
        console.log("Received articles data:", res.data);

        setProses(res.data.proses.sort((a, b) => a.id - b.id));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`${darkMode ? "bg-black" : "bg-white"} pb-12`}>
      <div className="flex justify-end p-4">
        <span className={`${!darkMode ? "text-black" : "text-white"} mr-2`}>
          light mode
        </span>
        <Switch onChange={toggleDarkMode} checked={darkMode} />{" "}
        <span className={`${!darkMode ? "text-black" : "text-white"} ml-2`}>
          dark mode
        </span>
      </div>
      {loading ? (
        <Spinner color="blue" className="m-auto min-h-screen" />
      ) : (
        <Card
          className={`mx-auto max-w-screen-xl min-h-screen ${
            darkMode
              ? "bg-gray-900 text-white"
              : "bg-amber-50 text-black bg-opacity-50"
          } `}
        >
          <CardBody>
            <Typography
              variant="h4"
              color={darkMode ? "white" : "blue-gray"}
              className="mb-0 text-center punjabi-semibold text-3xl"
            >
              ਦੇਵਿੰਦਰ ਦੀਦਾਰ ਦੁਆਰਾ ਲਿਖੇ ਅਖਾਣਾ / ਵਿਚਾਰ
            </Typography>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>

            <ul className="list-inside list-disc pl-4">
              {Proses.map(({ content, id }, index) => (
                <li key={index} className="list-none">
                <div className="flex items-top">
                  <Typography className="punjabi-normal text-xl ml-4 mt-4">
                    {content} <span className="text-gray-600 text-sm">[{id}]</span>
                  </Typography>
                </div>
                <div className="w-full border-b-2 h-5 border-blue-gray-100 "> <br /></div>
              </li>
              
              ))}
            </ul>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
