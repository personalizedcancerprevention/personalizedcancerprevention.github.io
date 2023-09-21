import React, { useState } from "react";
import "./Header.scss";

import { Button } from "antd";
import logo from "../assets/oncology.svg";
import { Menu } from "antd";
import type { MenuProps } from "antd";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "All About Cancer",
      key: "all-about-cancer",
      // icon: <AppstoreOutlined />,
      // disabled: true,
      onClick: () => {
        navigate("all-about-cancer");
      },
    },
    // {
    //   label: "Risk Assessment",
    //   key: "risk-assessment",
    //   // icon: <SolutionOutlined />,
    // },

    {
      label: "Programs & Services",
      key: "SubMenu",
      // icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Patient Programs",
          children: [
            {
              label: "Genetic Risk Assessment",
              key: "GRA",
              onClick: () => {
                navigate("/risk-accessment");
              },
            },
            {
              label: "Risk Reduction Strategies",
              key: "RRS",
            },
          ],
        },
        {
          type: "group",
          label: "Services",
          children: [
            {
              label: "Cancer Screening",
              key: "cs",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: "Latest Research and News",
      key: "latest-research-and-news",
    },
    {
      label: "FAQ and Feedback",
      key: "faq-and-feedback",
    },
  ];

  return (
    <div className="new-header-container">
      <div className="left-container">
        <svg
          width="36"
          height="40"
          viewBox="0 0 36 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.5041 5.1779C28.4542 1.74213 23.9105 0 18 0C12.0893 0 7.54585 1.74213 4.4957 5.1779C1.51262 8.53834 0 13.5252 0 20C0 26.4748 1.51262 31.4617 4.4957 34.8222C7.54585 38.2579 12.0893 40 18 40C23.9105 40 28.4542 38.2579 31.5041 34.8222C34.4874 31.4617 36 26.4748 36 20C36 13.5252 34.4874 8.53834 31.5041 5.1779ZM18 37.6947C7.56161 37.6947 2.34251 31.7965 2.34251 20C2.34251 8.20356 7.56161 2.3053 18 2.3053C28.4382 2.3053 33.6575 8.20356 33.6575 20C33.6575 31.7965 28.4382 37.6947 18 37.6947ZM18.0001 6.39537L25.1437 13.4463L23.4918 15.0768L19.1681 10.8091V18.0801H24.2954V20.3858H19.1681V22.1701H24.2954V24.4758H19.1681V26.2601H24.2954V28.5659H19.1681V33.6046H16.8319V28.5659H11.7046V26.2601H16.8319V24.4758H11.7046V22.1701H16.8319V20.3858H11.7046V18.0801H16.8319V10.8093L12.5082 15.0768L10.8563 13.4463L18.0001 6.39537Z"
            fill="#002569"
          />
        </svg>
        <div className="product-container">MSK Prevent</div>
      </div>
      <div className="right-container">
        <svg
          className="icon-container"
          width="56"
          height="62"
          viewBox="0 0 56 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 20.9999C22.48 20.9999 18 25.4799 18 30.9999C18 36.5199 22.48 40.9999 28 40.9999C33.52 40.9999 38 36.5199 38 30.9999C38 25.4799 33.52 20.9999 28 20.9999ZM27 38.9299C23.05 38.4399 20 35.0799 20 30.9999C20 30.3799 20.08 29.7899 20.21 29.2099L25 33.9999V34.9999C25 36.0999 25.9 36.9999 27 36.9999V38.9299ZM33.9 36.3899C33.64 35.5799 32.9 34.9999 32 34.9999H31V31.9999C31 31.4499 30.55 30.9999 30 30.9999H24V28.9999H26C26.55 28.9999 27 28.5499 27 27.9999V25.9999H29C30.1 25.9999 31 25.0999 31 23.9999V23.5899C33.93 24.7799 36 27.6499 36 30.9999C36 33.0799 35.2 34.9699 33.9 36.3899Z"
            fill="#262626"
          />
        </svg>
        <svg
          className="icon-container"
          width="56"
          height="62"
          viewBox="0 0 56 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.755 33.255H30.965L30.685 32.985C31.665 31.845 32.255 30.365 32.255 28.755C32.255 25.165 29.345 22.255 25.755 22.255C22.165 22.255 19.255 25.165 19.255 28.755C19.255 32.345 22.165 35.255 25.755 35.255C27.365 35.255 28.845 34.665 29.985 33.685L30.255 33.965V34.755L35.255 39.745L36.745 38.255L31.755 33.255ZM25.755 33.255C23.265 33.255 21.255 31.245 21.255 28.755C21.255 26.265 23.265 24.255 25.755 24.255C28.245 24.255 30.255 26.265 30.255 28.755C30.255 31.245 28.245 33.255 25.755 33.255Z"
            fill="#262626"
          />
        </svg>
      </div>
    </div>
  );
  return (
    <div className="header-container">
      <img src={logo} className="logo-container" alt="logo"></img>

      <Menu
        // theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />

      <div className="right-container">
        <Button
          type="link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          icon={<FontAwesomeIcon icon={faDiscord} />}
        />
        <Button
          type="link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          icon={<FontAwesomeIcon icon={faTwitter} />}
        />
        <Button
          type="link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          icon={<FontAwesomeIcon icon={faTelegram} />}
        />
      </div>
    </div>
  );
};

export default Header;
