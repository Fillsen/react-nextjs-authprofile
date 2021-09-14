import React from 'react';
import {Avatar, Card, Image} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";

const ProfileCard = ({firstName, secondName, metaDescription, avatarUrl}) => {
  return (
    <>
      <Card
        cover={
          <Image
            src={avatarUrl}
            alt="Your profile image"
          />
        }
        actions={[
          <SettingOutlined key="setting"/>,
          <EditOutlined key="edit"/>,
          <EllipsisOutlined key="ellipsis"/>,
        ]}
      >
        <Card.Meta
          title={`${firstName} ${secondName}`}
          avatar={<Avatar src={avatarUrl} alt='Your avatar'/>}
          description={metaDescription}
        />
      </Card>
    </>
  );
};

export default ProfileCard;
