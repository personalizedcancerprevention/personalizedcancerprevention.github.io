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
              label: "Risk Assessment",
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
    <div className="header-container">
      <img src={logo} className="logo-container" alt="logo"></img>

      <Menu
        theme="dark"
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
