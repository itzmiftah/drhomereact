import { Grid, useTheme } from "@mui/material";
import React from "react";
import { getAmountWithSign } from "../../helper-functions/CardHelpers";
import loyaltyImage from "./asset/loyalty.png";
import wallet from "./asset/newWallet.png";
import orderImage from "./asset/order.png";

import ProfileStatistics from "../profile/ProfileStatistics";

const UserDashBoard = ({ data, configData, isLoading }) => {
  const theme = useTheme();
  // console.log(data);
  return (
    <Grid
      container
      item 
      md={8}
      alignItems="center"
      spacing={{ xs: 2, sm: 3, md: 5 }}
      paddingTop={{ xs: "10px", sm: "15px", md: "40px" }}
      xs={12}
      sm={12}
    >
      <Grid item xs={6} sm={6} md={3}>
        <ProfileStatistics
          isLoading={isLoading}
          value={data?.member_since_days}
          title="Days Since Joining"
          image={'https://drhome.drhomeonline.net/storage/app/public/profile/'+data?.image} 
          pathname="profile-settings"
          storage={data?.storage}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <ProfileStatistics
          isLoading={isLoading}
          value={getAmountWithSign(data?.wallet_balance)}
          title="Amount in Wallet"
          image={wallet.src}
          pathname="wallet"
          storage={data?.storage}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <ProfileStatistics
          isLoading={isLoading}
          value={data?.order_count}
          title="Total Orders"
          image={orderImage.src}
          pathname="my-orders"
          storage={data?.storage}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <ProfileStatistics
          isLoading={isLoading}
          value={data?.loyalty_point}
          title="loyalty points"
          image={loyaltyImage.src}
          pathname="loyalty-points"
          storage={data?.storage}
        />
      </Grid>
    </Grid>
  );
};

export default UserDashBoard;
