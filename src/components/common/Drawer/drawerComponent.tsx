import React from 'react';
import { Drawer, Button, Space } from 'antd';

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    content: React.ReactNode;
};

const DrawerComponent: React.FC<DrawerProps> = ({ open, onClose, content }) => {
    return (
        <Drawer
            title="Dynamic Content Drawer"
            width={720}
            onClose={onClose}
            open={open}
            maskClosable={false}
            styles={{
                body: {
                    overflow: 'hidden'
                },
            }}
            extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} type="link">
                        Submit
                    </Button>
                </Space>
            }
        >
            {content} {/* Render the dynamic content */}
        </Drawer>
    )
}

export default DrawerComponent