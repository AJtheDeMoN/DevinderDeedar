import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate  } from "react-router-dom";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Input,
  Spinner,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";

const backendUrl = process.env.REACT_APP_BASE_URL;

const TABLE_HEAD = ["ਲੇਖ", "ਪੁਸਤਕ", "ਸਾਲ"];

export default function TransactionsTable() {
  const [Articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTab] = useState("ਸਾਰੇ");
  const [allBooks, setAllBooks] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const applicationsPerPage = 1;
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/articles/${id}`);
  };

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/article/`, { withCredentials: true })
      .then((res) => {
        console.log("Received articles data:", res.data);
        const temp = res.data.articles;
        const books = [...new Set(temp.map((item) => item.book_punjabi))];
        const years = [...new Set(temp.map((item) => item.year))];
        setAllYears(years);
        setAllBooks(books);
        setArticles(res.data.articles.sort((a, b) =>  b.year-a.year));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  const toggleBooks = (item) => {
    if (selectedBooks.includes(item)) {
      setSelectedBooks(selectedBooks.filter((h) => h !== item));
    } else {
      setSelectedBooks([...selectedBooks, item]);
    }
  };
  const toggleYears = (item) => {
    if (selectedYears.includes(item)) {
      setSelectedYears(selectedYears.filter((h) => h !== item));
    } else {
      setSelectedYears([...selectedYears, item]);
    }
  };

  const removeAllFilters = () => {
    setSelectedBooks([]);
    setSelectedYears([]);
  };

  const filteredApplications = useMemo(() => {
    // Filter based on selectedBooks and selectedYears
    let filtered = Articles;

    if (selectedBooks.length > 0) {
        filtered = filtered.filter((app) => selectedBooks.includes(app.book_punjabi));
    }

    if (selectedYears.length > 0) {
        filtered = filtered.filter((app) => selectedYears.includes(app.year));
    }

    // Further filter based on search input
    if (search.length > 0) {
        setCurrentPage(1);
        filtered = filtered.filter((article) => {
            const fltrarticle =
                article.title_punjabi.toLowerCase().startsWith(search.toLowerCase()) ||
                article.title_english.toLowerCase().startsWith(search.toLowerCase());
            if (currentTab === "ਸਾਰੇ") return fltrarticle;
            return fltrarticle && fltrarticle.book_punjabi === currentTab;
        });
    }

    return filtered.sort((b,a) => a.year - b.year);
}, [search, Articles, currentTab, selectedYears, selectedBooks]);

  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;

  const CurrentApplications = useMemo(() => {
    return filteredApplications.slice(
      indexOfFirstApplication,
      indexOfLastApplication
    );
  }, [filteredApplications, currentPage]);

  const totalApplications = filteredApplications.length;

  const totalPages = useMemo(() => {
    return Math.ceil(totalApplications / applicationsPerPage);
  }, [totalApplications, applicationsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Card className="max-w-screen-xl mx-auto mb-12">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography
              variant="h4"
              color="blue-gray"
              className="punjabi-semibold text-gray-700 text-center"
            >
              ਦੇਵਿੰਦਰ ਦੀਦਾਰ ਦੁਆਰਾ ਲਿਖੇ ਲੇਖ
            </Typography>
            <div className="w-full md:w-max pt-3 z-0" value="All">
              <span className="my-auto mr-4">ਇਸ ਦੁਆਰਾ ਫਿਲਟਰ ਲਾਗੂ ਕਰੋ:</span>{" "}
              <a
                onClick={removeAllFilters}
                className="text-blue-700 underline cursor-pointer"
                href="#"
              >
                {" "}
                ਫਿਲਟਰ ਸਾਫ਼ ਕਰੋ
              </a>
              <div className="mt-4">
                <span>
                  <Menu
                    dismiss={{
                      itemPress: false,
                    }}
                  >
                    <MenuHandler>
                      <Button
                        className={`px-6 py-2.5 mx-2 ${
                          selectedBooks.length > 0
                            ? "bg-green-400"
                            : "bg-gray-300 text-gray-900"
                        } ${
                          selectedBooks.length > 0
                            ? "hover:bg-green-500"
                            : "hover:bg-gray-400"
                        }`}
                      >
                        ਪੁਸਤਕਾਂ
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-72">
                      {allBooks.map((item) => {
                        return (
                          <options>
                            <label
                              htmlFor={item}
                              className="flex cursor-pointer items-center gap-2 p-2"
                            >
                              <input
                                type="checkbox"
                                className=""
                                id={item}
                                checked={selectedBooks.includes(item)}
                                onClick={() => toggleBooks(item)}
                              />
                              <span className="text-base">{item}</span>
                            </label>
                          </options>
                        );
                      })}
                    </MenuList>
                  </Menu>
                </span>
                <span>
                  <Menu
                    dismiss={{
                      itemPress: false,
                    }}
                  >
                    <MenuHandler>
                      <Button
                        className={`px-6 py-2.5 mx-2 ${
                          selectedYears.length > 0
                            ? "bg-green-400"
                            : "bg-gray-300 text-gray-900"
                        } ${
                          selectedYears.length > 0
                            ? "hover:bg-green-500"
                            : "hover:bg-gray-400"
                        }`}
                      >
                        ਸਾਲ
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-72">
                      {allYears.map((item) => {
                        return (
                          <options>
                            <label
                              htmlFor={item}
                              className="flex cursor-pointer items-center gap-2 p-2"
                            >
                              <input
                                type="checkbox"
                                className=""
                                id={item}
                                checked={selectedYears.includes(item)}
                                onClick={() => toggleYears(item)}
                              />
                              <span className="text-base">{item}</span>
                            </label>
                          </options>
                        );
                      })}
                    </MenuList>
                  </Menu>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72 ">
              <Input
                label="ਖੋਜ"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0 min-h-[70vh]">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-3"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className={`font-bold leading-none text-lg punjabi-semibold ${head==="ਲੇਖ"?"ml-12":""} text-gray-800`}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                  <Spinner className="h-8 mx-auto" />
                </td>
              </tr>
            ) : (
              CurrentApplications.map(
                ({ title_punjabi, id, book_punjabi, year }, index) => {
                  const rowColor = index % 2 !== 0 ? 'bg-gray-50' : '';
                  return (
                    <tr
                      key={id}
                      className={`hover:bg-gray-200 hover:cursor-pointer border ${rowColor}`}
                      onClick={()=>handleRowClick(id)}
                    >
                      <td className="px-4 py-3 border-b border-r-2 border-blue-gray-100 pr-2">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              className="text-blue-gray-800 font-normal text-md punjabi-medium"
                            >
                              {title_punjabi}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b border-r-2 border-blue-gray-100 pr-2">
                        <div className="flex gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              className="text-blue-gray-800 font-normal text-md punjabi-medium pl-2"
                            >
                              {book_punjabi}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b border-r-2 border-blue-gray-100 pr-2">
                        <div className="flex gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              className="text-blue-gray-800 font-normal text-md punjabi-medium"
                            >
                              {year}
                            </Typography>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {currentPage} ਪੰਨਾ {totalPages} ਵਿੱਚੋਂ
        </Typography>
        <div className="flex gap-2">
          {currentPage > 1 && (
            <Button
              variant="outlined"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              className="punjabi-normal text-lg py-1 px-2"
            >
              ਪਿਛਲਾ
            </Button>
          )}
          {currentPage < totalPages && (
            <Button
              variant="outlined"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              className="punjabi-normal text-lg py-1 px-2"
            >
              ਅਗਲਾ
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
