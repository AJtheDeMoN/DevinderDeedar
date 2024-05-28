import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1"
      >
        <a href="/" className="flex items-center hover:text-blue-100 transition-colors text-2xl punjabi-medium">
        ਘਰ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1"
      >
        <a href="/books" className="flex items-center hover:text-blue-100 transition-colors text-2xl punjabi-medium">
        ਕਿਤਾਬਾਂ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1"
      >
        <a href="/articles" className="flex items-center hover:text-blue-100 transition-colors text-2xl punjabi-medium">
        ਲੇਖ / ਵਾਰਤਕ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1"
      >
        <a href="/story" className="flex items-center hover:text-blue-100 transition-colors text-2xl punjabi-medium">
        ਕਹਾਣੀਆਂ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1"
      >
        <a href="/quotes" className="flex items-center hover:text-blue-100 transition-colors text-2xl punjabi-medium">
        ਅਖਾਣਾ / ਵਿਚਾਰ
        </a>
      </Typography>
    </ul>
  );
}
 
function Headers() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-full rounded-none px-3 pl-5 lg:px-24 py-2 relative top-0 w-full bg-blue-700 border-none">
      <div className="flex items-center justify-center lg:justify-between text-white">
        <Typography
          as="a"
          href="/"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 text-4xl text-white punjabi-medium"
        >
          ਦੇਵਿੰਦਰ ਦੀਦਾਰ
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Headers;
