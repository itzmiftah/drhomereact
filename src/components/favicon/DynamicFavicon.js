import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useSelector } from "react-redux";
import { getImageUrl } from "utils/CustomFunctions";
const DynamicFavicon = ({ configData }) => {
  //const { configData } = useSelector((state) => state.configData);
  const businessLogo = `${configData?.base_urls?.business_logo_url || ''}/${configData?.fav_icon || ''}`;

  
// console.log(configData)
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={businessLogo}
      />
      <link rel="icon" href={businessLogo} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={businessLogo}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={businessLogo}
      />
    </Head>
  );
};

DynamicFavicon.propTypes = {};

export default DynamicFavicon;
