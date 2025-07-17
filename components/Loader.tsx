import React from 'react'
import Image from 'next/image';

const Loader = () => {
  return (
		<Image src={'/loader.svg'} alt='loader' width={100} height={100} />
  );
}

export default Loader