import React, { useState } from "react";
import requsts from "../../api/station";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/lab/TabList";
import Image from "../../assets/image1.svg";
import Image2 from "../../assets/image2.svg";
import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { Button } from "components/elements";

const Index = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState("1");
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        flexGrow: 1,
        color: "#273164",
        textAlign: "right",
        "& .MuiBox-root": {
          padding: "0 !important",
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "#7AB794 !important",
        },
        "& .Mui-expanded": {
          "& .MuiIconButton-root": {
            color: "#f0b90b",
          },
        },
      },
      tab: {
        width: "50%",
        border: "1px solid #E3E6E9 !important",
        "&.Mui-selected": {
          border: "1px solid #7AB794 !important",
          background: "#7AB794",
          color: "white !important",
          outline: "none",
          boxShadow: "none",
        },
      },
      // checkbox: {
      //   "& .Mui-checked": {
      //     color: "#7AB693 !important",
      //   },
      //   "& .MuiFormControlLabel-label": {
      //     color: "#828282",
      //   },
      // },
    })
  );
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="flex w-full pt-20">
      <div className="w-1/2  bg-gray-50 flex justify-center items-center px-8 py-8">
        {value == 1 && (
          <div className="w-full ">
            <Swiper
              className="mySwiper"
              pagination={pagination}
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5 ">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image} alt="image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {value == 2 && (
          <div className="w-full ">
            <Swiper
              className="mySwiper"
              pagination={pagination}
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5 ">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image2} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image2} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image2} alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-5">
                  <div className="mb-[30px] w-full max-w-[500px] px-4">
                    <h2 className="font-bold text-[#000000] text-[24px] leading-[31px] ">
                      Discover Your Professional Business Model
                    </h2>
                    <p className="text-[#828282] text-[14px] text-center mt-2">
                      Effective and efficiently screen and identify the
                      candidate with the highest potential to succeed in the
                      role you want to fill.
                    </p>
                  </div>

                  <img src={Image2} alt="image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
      <div className="w-1/2 flex-col bg-white flex   p-11">
        <h1 className="">Log In👍</h1>
        <h2>
          Don’t have an account?<span>Sign up</span>
        </h2>
        {/* <TabContext value={value}>
          <Tabs className={classes.root} onChange={handleChange} centered>
            <Tab
              className={classes.tab}
              fullWidth
              label="TRIPA COACHING"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tab}
              fullWidth
              label="TRIPA BUSINESS"
              {...a11yProps(1)}
            />
          </Tabs>
          <TabPanel value="1" index={0}>
            <button className="w-full border-2 border-gray-200 py-4 rounded-[3px] text-gray-400 text-lg hover:bg-gray-100">
              Log in with Google
            </button>
          </TabPanel>
          <TabPanel value="2" index={1}>
            <div className="w-full flex items-center justify-between">
              <button className="w-full border-2 border-gray-200 py-4 rounded-[3px] text-gray-400 text-lg hover:bg-gray-100">
                Log in with Google
              </button>
              <button className="w-full border-2 border-gray-200 py-4 rounded-[3px] text-gray-400 text-lg hover:bg-gray-100">
                Log in with Bind ID
              </button>
            </div>
          </TabPanel>
        </TabContext> */}

        <div className="w-full bg-gray-200 h-[1.2px] relative my-8">
          <div className="absolute text-gray-400 text-xl top-1/2 right-1/2 -translate-y-1/2 text-[14px]  translate-x-1/2 bg-white rounded-full w-8 h-8 flex justify-center items-center ">
            OR
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="">Email Address</label>
          <div className="w-full border-2 border-gray-200 py-4 rounded-[3px] mb-4">
            <input className="w-full" type={"text"} />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="">Password</label>
          <div className="w-full border-2 border-gray-200 py-4 rounded-[3px] mb-4">
            <input className="w-full" type={"password"} />
          </div>
        </div>
        <div className="full flex items-center justify-between">
          <input type="checkbox" name="" id="" />
          <p>Forgot your password?</p>
        </div>
        <Button
          variant="primary"
          className="w-full  text-lg "
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default Index;
