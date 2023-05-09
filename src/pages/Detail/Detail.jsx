import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const param = useParams();
  return (
    <div className="h-screen flex justify-center items-center">{`${param.mediaType} detail ${param.id}`}</div>
  );
}
