import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full py-8 bg-blue-700 opacity-80">
      <Typography color="white" className="text-center font-normal">
      ਫੇਸਬੁੱਕ 'ਤੇ ਦਵਿੰਦਰ ਦੀਦਾਰ ਨੂੰ ਵੇਖੋ:
        <a 
          href="https://www.facebook.com/devinder.deedar"
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-2 inline-block"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
      </Typography>
      <Typography color="white" className="text-center font-normal px-0 mx-0">
        &copy; {new Date().getFullYear()} Devinder Deedar Website | All right reserved
      </Typography>
    </footer>
  );
}