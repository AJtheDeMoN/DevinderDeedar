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
    content: "ਇਹ ਕਿਤਾਬ 1971 ਤੋਂ 2019 ਤੱਕ ਦੀਆਂ ਮੇਰੀਆਂ ਸਾਰੀਆਂ ਕਹਾਣੀਆਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦੀ ਹੈ। ਇਸ ਦੇ ਤਿੰਨ ਸੰਸਕਰਨ ਹਨ: ਪਹਿਲਾ 1977 ਵਿੱਚ, ਦੂਜਾ 2013 ਵਿੱਚ, ਅਤੇ ਤੀਜਾ 2022 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਜ਼ਿੰਦਗੀ ਦੇ ਹਨੇਰੇ ਦੀਆ ਰੌਸ਼ਨ ਬੱਤੀਆਂ",
    content: "ਇਸ ਕਿਤਾਬ ਵਿੱਚ 2009 ਤੋਂ 2011 ਤੱਕ ਮੇਰੇ ਸਾਰੇ ਅਖਬਾਰੀ ਲੇਖ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਦੇ ਚਾਰ ਸੰਸਕਰਨ ਹਨ: ਪਹਿਲਾ ਅਤੇ ਦੂਜਾ 2011 ਵਿੱਚ, ਤੀਜਾ 2012 ਵਿੱਚ, ਅਤੇ ਚੌਥਾ 2013 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਗਲੀ ਜੋਗੁ ਨ ਹੋਈ",
    content: "ਇਸ ਕਿਤਾਬ ਵਿੱਚ ਮੇਰੇ 2011 ਤੋਂ 2013 ਤੱਕ ਦੇ ਸਾਰੇ ਅਖਬਾਰੀ ਲੇਖ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਦੇ ਤਿੰਨ ਸੰਸਕਰਨ ਹਨ: ਪਹਿਲਾ 2013 ਵਿੱਚ, ਦੂਜਾ 2015 ਵਿੱਚ, ਅਤੇ ਤੀਜਾ 2019 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਆਪਣੀ ਹੋਂਦ ਦੀ ਤਲਾਸ਼",
    content: "ਇਸ ਕਿਤਾਬ ਵਿੱਚ 2013 ਤੋਂ 2015 ਤੱਕ ਮੇਰੇ ਸਾਰੇ ਅਖਬਾਰੀ ਲੇਖ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਦੇ ਦੋ ਸੰਸਕਰਨ ਹਨ: ਪਹਿਲਾ 2016 ਵਿੱਚ ਅਤੇ ਦੂਜਾ 2019 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਡੂੰਗੇ ਸਾਗਰਾਂ ਦੇ ਮੋਤੀ",
    content: "ਇਸ ਕਿਤਾਬ ਵਿੱਚ ਅਖਾਣਾ ਅਤੇ ਵਿਚਾਰ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਦੇ ਦੋ ਸੰਸਕਰਨ ਹਨ: ਪਹਿਲਾ 2017 ਵਿੱਚ ਅਤੇ ਦੂਜਾ 2022 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਪੋਹ ਦੀ ਚਾਨਣੀ",
    content: "ਠੰਰੀ ਚਾਨਣੀ ਦੇ ਗੀਤ ਦਾ ਦਰਦ। ਇਸ ਕਿਤਾਬ ਵਿੱਚ 2016 ਤੋਂ 2017 ਤੱਕ ਮੇਰੇ ਸਾਰੇ ਅਖਬਾਰੀ ਲੇਖ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਦੇ ਦੋ ਸੰਸਕਰਨ ਹਨ: ਪਹਿਲਾ 2017 ਵਿੱਚ ਅਤੇ ਦੂਜਾ 2022 ਵਿੱਚ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ਝੀਥਾਂ 'ਚੋਂ ਝਾਕਦਿਆਂ",
    content: "ਇਸ ਕਿਤਾਬ ਵਿੱਚ ਮੇਰੇ 2017 ਤੋਂ 2023 ਤੱਕ ਦੇ ਸਾਰੇ ਅਖਬਾਰੀ ਲੇਖ ਸ਼ਾਮਲ ਹਨ। ਇਸ ਕਿਤਾਬ ਦਾ ਸਿਰਫ ਇੱਕ ਹੀ ਸੰਸਕਰਨ ਹੈ, ਜੋ 2023 ਵਿੱਚ ਪ੍ਰਕਾਸ਼ਿਤ ਹੋਇਆ ਹੈ।",
    image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  // Add more book objects here...
];

export default function HorizontalCard() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Typography color="blue-gray" variant="h3" className="text-center my-8 punjabi-semibold">
      ਦੇਵਿੰਦਰ ਦੀਦਾਰ ਦੁਆਰਾ ਲਿਖੀਆਂ ਕਿਤਾਬਾਂ
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
