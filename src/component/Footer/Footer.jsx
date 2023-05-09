import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="p-5">
      <p className="flex justify-center text-center items-center text-white">
        © 2023 WhatMoree.
        <br className="md:hidden block" />
        {' '}
        All rights reserved | MRA
        {' '}
        <AiFillHeart fill="red" />
      </p>
    </div>
  );
}
