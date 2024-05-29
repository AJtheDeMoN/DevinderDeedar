import { Carousel } from "@material-tailwind/react";

export default function Slider() {
  return (
    <div className="pt-0 mx-auto lg:max-w-screen-lg">
      <Carousel loop={true} autoplay={true} className="rounded-xl slider h-48">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Devinderdeedar"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Devinderdeedar"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="Devinderdeedar"
          className="h-full w-full object-cover object-center"
        />
      </Carousel>
      <style jsx>{`
        @media (min-width: 400px) and (max-width: 500px) {
          .slider {
            height: 280px;
            transition: height 0.3s ease-in-out;
          }
        }
        @media (min-width: 500px) and (max-width: 600px) {
          .slider {
            height: 300px;
            transition: height 0.3s ease-in-out;
          }
        }
        @media (min-width: 600px) and (max-width: 768px) {
          .slider {
            height: 320px;
            transition: height 0.3s ease-in-out;
          }
        }
        
        /* Large screens: width 768px to 992px */
        @media (min-width: 768px) and (max-width: 992px) {
          .slider {
            height: 340px;
            transition: height 0.3s ease-in-out;
          }
        }
        
        /* Extra large screens: width 992px to 1200px */
        @media (min-width: 992px) and (max-width: 1200px) {
          .slider {
            height: 350px;
            transition: height 0.3s ease-in-out;
          }
        }
        
        /* Super large screens: width 1200px to 1400px */
        @media (min-width: 1200px) and (max-width: 1400px) {
          .slider {
            height: 380px;
            transition: height 0.3s ease-in-out;
          }
        }
        
        /* Ultra large screens: width greater than 1400px */
        @media (min-width: 1400px) {
          .slider {
            height: 400px;
            transition: height 0.3s ease-in-out;
          }
      `}</style>
    </div>
  );
}
