import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Books = [
  {
    title: "ਅੰਨ੍ਹੇ ਘੋੜਿਆਂ ਦੀ ਦੌੜ",
    content: "ਇਹ ਕਿਤਾਬ 1971 ਤੋਂ 2019 ਤੱਕ ਦੀਆਂ ਮੇਰੀਆਂ ਸਾਰੀਆਂ ਕਹਾਣੀਆਂ ਨੂੰ ਸੰਕਲਿਤ ਕਰਦੀ ਹੈ। ਇਸ ਦੇ ਤਿੰਨ ਐਡੀਸ਼ਨ ਹਨ: ਪਹਿਲੀ 1977 ਵਿੱਚ, ਦੂਜੀ 2013 ਵਿੱਚ, ਅਤੇ ਤੀਜੀ 2022 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਜ਼ਿੰਦਗੀ ਦੇ ਹਨੇਰੇ ਦੀਆ ਰੌਸ਼ਨ ਬੱਤੀਆਂ",
    content: "ਇਸ ਕਿਤਾਬ ਵਿੱਚ ਮੇਰੇ 2009 ਤੋਂ 2011 ਤੱਕ ਦੇ ਸਾਰੇ ਅਖਬਾਰੀ ਲੇਖ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਕਿਤਾਬ ਦੇ ਚਾਰ ਐਡੀਸ਼ਨ ਹਨ: ਪਹਿਲੇ ਦੋ 2011 ਵਿੱਚ, ਤੀਜੇ 2012 ਵਿੱਚ, ਅਤੇ ਚੌਥੇ 2013 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਗਲੀ ਜੋਗੁ ਨ ਹੋਈ ",
    content: "ਇਸ ਕਿਤਾਬ ਵਿੱਚ ਮੇਰੇ 2011 ਤੋਂ 2013 ਤੱਕ ਦੇ ਸਾਰੇ ਅਖਬਾਰੀ ਲੇਖ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਕਿਤਾਬ ਦੇ ਤਿੰਨ ਐਡੀਸ਼ਨ ਹਨ: ਪਹਿਲਾ 2013 ਵਿੱਚ, ਦੂਜਾ 2015 ਵਿੱਚ, ਅਤੇ ਤੀਜਾ 2019 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UI/UX Review Check",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UI/UX Review Check",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UI/UX Review Check",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UI/UX Review Check",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UI/UX Review Check",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UI/UX Review Check",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  // Add more book objects here...
];

export default function HorizontalCard() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Typography color="blue-gray" variant="h3" className="text-center my-8 punjabi-bold">
      ਦੇਵਿੰਦਰ ਦੀਦਾਰ ਦੁਆਰਾ ਲਿਖੀਆਂ ਪੁਸਤਕਾਂ
      </Typography>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Books.map(({ title, content, image }, index) => (
          <Card key={index} className="mx-auto w-96 -mt-4 mb-2">
            <CardHeader color="blue-gray" className="relative h-56 mt-4">
              <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2 punjabi-semibold">
                {title}
              </Typography>
              <Typography className='punjabi-medium text-lg'>
                {content}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
