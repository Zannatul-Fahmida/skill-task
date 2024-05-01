import { Divider, Table, Button, Tooltip } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const data = [
  {
    key: "1",
    name: "John Brown",
  },
  {
    key: "2",
    name: "Jim Green",
  },
  {
    key: "3",
    name: "Joe Black",
  },
  {
    key: "4",
    name: "Abled User",
  },
];

const Page = () => {
  const router = useRouter();

  const handleView = (record) => {
    console.log("View details of", record);
    router.push(`/projectDetails/${record.key}`);
  };

  const handleEdit = (record) => {
    console.log("Edit", record);
  };

  const handleDelete = (record) => {
    console.log("Delete", record);
  };

  const columns = [
    {
      title: "Project Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <span>
          <Tooltip title="View Details">
            <Button
              type="primary"
              shape="circle"
              onClick={() => handleView(record)}
              icon={<EyeOutlined />}
            />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="Edit">
            <Button
              type="primary"
              className="bg-yellow-500"
              shape="circle"
              onClick={() => handleEdit(record)}
              icon={<EditOutlined />}
            />
          </Tooltip>
          <Divider type="vertical" />
          <Tooltip title="Delete">
            <Button
              type="primary"
              danger
              shape="circle"
              onClick={() => handleDelete(record)}
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Page;