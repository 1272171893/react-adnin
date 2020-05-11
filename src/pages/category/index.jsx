import React from "react";
import { Card, Button, Table, message } from "antd";
import { getCategory } from "@/api";
import { PlusOutlined } from "@ant-design/icons";
export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }
  componentWillMount() {
    this.columns = [
      {
        title: "ID",
        dataIndex: "_id",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "名称",
        dataIndex: "name",
        align: "right",
      },
    ];
  }
  componentDidMount() {
    this.initailData();
  }
  initailData = async () => {
    this.setState({ loading: true });
    const res = await getCategory();
    this.setState({ loading: false });
    if (res.status === 0) {
      this.setState({
        data: res.data,
      });
      return;
    }
    message.error("请求失败");
  };
  render() {
    const extra = (
      <Button type="primary" icon={<PlusOutlined />}>
        添加
      </Button>
    );
    const data = [
      {
        key: "1",
        name: "John Brown",
        money: "￥300,000.00",
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        money: "￥1,256,000.00",
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        money: "￥120,000.00",
        address: "Sidney No. 1 Lake Park",
      },
    ];
    return (
      <Card extra={extra}>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          bordered
          loading={this.state.loading}
          pagination={{ defaultPageSize: 10, showQuickJumper: true }}
        />
      </Card>
    );
  }
}
