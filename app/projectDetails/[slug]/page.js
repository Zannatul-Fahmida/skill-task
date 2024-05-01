'use client'
import Navbar from "@/components/Shared/Navbar";
import { Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TaskLists from "@/components/Dashboard/TaskLists";
import TeamMembers from "@/components/Dashboard/TeamMembers";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-4xl font-bold">Project Name</h1>
          <p className="my-4">description</p>
          <div>
            <div className="flex items-center justify-between bg-slate-300 p-2 rounded-lg">
              <p className="text-2xl font-bold">Tasks</p>
              <Tooltip title="Create Task">
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  icon={<PlusOutlined />}
                />
              </Tooltip>
            </div>
            <TaskLists />
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">Team Members</h1>
          <TeamMembers />
          <h1 className="text-2xl font-bold my-4">Recent Activities</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
