import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useSelector } from "react-redux";
import { getImageUrl } from "utils/CustomFunctions";
const DynamicFavicon = ({ configData }) => {
  //const { configData } = useSelector((state) => state.configData);
  const businessLogo = configData?.base_urls?.business_logo_url;

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={'https://drhome.drhomeonline.net/storage/app/public/business/2024-07-30-66a89ec685b88.png'}
      />
      <link rel="icon" href={'https://drhome.drhomeonline.net/storage/app/public/business/2024-07-30-66a89ec685b88.png'} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={'https://drhome.drhomeonline.net/storage/app/public/business/2024-07-30-66a89ec685b88.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={'https://drhome.drhomeonline.net/storage/app/public/business/2024-07-30-66a89ec685b88.png'}
      />
    </Head>
  );
};

DynamicFavicon.propTypes = {};

export default DynamicFavicon;
