'use client';
import React from 'react';
import { useState } from 'react';

export default function ticketManagement() {
    const [type, setType] = useState<string>();
    const [platform, setPlatform] = useState<string>();
    const [incidentType, setIncidentType] = useState<string>();
    const [businessImpact, setBusinessImpact] = useState<string>();
    const [feedbackCh, setFeedbackCh] = useState<string>();

    //   const [type, setType] = useState<string>();

    function logType() {
        console.log(type);
    }

    return (
        <div className="h-screen  bg-gradient-to-r from-orange-300 to-red-500">
            <div className="flex items-center justify-center min-h-screen">
                <div className=" h-[550px] w-[1000px] bg-gray-50 shadow-lg rounded-lg p-4 items-center justify-center">
                    <div className="  mt-3">
                        <p className=" font-semibold text-[18px]">Ticket Management</p>
                    </div>
                    <div className="bg-gray-600 h-[2px] mb-1"></div>
                    <div className=" flex  h-[45px] items-center justify-end mb-1">
                        <button
                            className=" bg-orange-400 h-[32px] w-[105px] rounded-md mr-3 hover:opacity-75 "
                            //   onClick={}
                        >
                            <p className="text-[12px] font-semibold text-white">Create Ticket</p>
                        </button>
                    </div>
                    <div className=" h-[415px] w-full  shadow-lg rounded-lg  items-center justify-center">
                        <div className=" bg-green-200 p-2 mb-1 rounded-md shadow-md">
                            <p className=" font-semibold text-[15px] ">Customer Info</p>

                            <div className="bg-gray-600 h-[1px] mb-1"></div>
                            <div className="grid grid-cols-2 gap-2 bg-white justify-center p-2 ">
                                <div className="flex flex-col bg-red-300 p-1">
                                    <p className="text-[13px] mb-1">Name</p>
                                    <input
                                        type="text"
                                        id="name"
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] "
                                    ></input>
                                </div>
                                <div className="flex flex-col bg-yellow-300 p-1">
                                    <p className="text-[13px] mb-1">Lastname</p>
                                    <input
                                        type="text"
                                        id="lastname"
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px]   "
                                    ></input>
                                </div>
                                <div className="flex flex-col bg-blue-300 p-1">
                                    <p className="text-[13px] mb-1">Phone Number</p>
                                    <input
                                        type="text"
                                        id="phonenumber"
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] "
                                    ></input>
                                </div>
                                <div className="bg-green-300 p-1">
                                    <p className="text-[13px] mb-1">Type</p>
                                    <select
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] text-center"
                                        value={type}
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                    >
                                        <option value="select">select</option>
                                        <option value="hr">HR</option>
                                        <option value="cdd">CDD</option>
                                        {/* <option value="etc">etc.</option> */}
                                    </select>
                                    {/* <input type="text" id="type"></input> */}
                                </div>
                                <div className="flex flex-col bg-orange-300 p-1">
                                    <p className="text-[13px] mb-1">Email</p>
                                    <input
                                        type="text"
                                        id="name"
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] "
                                    ></input>
                                </div>
                                <div className="flex flex-col bg-purple-300 p-1">
                                    <p className="text-[13px] mb-1">Company </p>
                                    <input
                                        type="text"
                                        id="name"
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] "
                                    ></input>
                                </div>
                            </div>
                            <div className=" mt-2 "></div>
                        </div>
                        <div className=" bg-green-300 p-2 rounded-md shadow-md">
                            <p className=" font-semibold text-[15px] ">System Info</p>

                            <div className="bg-gray-600 h-[1px] mb-1"></div>

                            <div className="grid grid-cols-2 gap-2 bg-white justify-center p-2 ">
                                <div className="flex flex-col bg-red-300 p-1">
                                    <p className="text-[13px] mb-1">Platform</p>
                                    <select
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] text-center"
                                        value={platform}
                                        onChange={(e) => {
                                            setPlatform(e.target.value);
                                        }}
                                    >
                                        <option value="select">select</option>
                                        <option value="hr">HR</option>
                                        <option value="cdd">CDD</option>
                                        {/* <option value="etc">etc.</option> */}
                                    </select>
                                </div>
                                <div className="flex flex-col bg-yellow-300 p-1">
                                    <p className="text-[13px] mb-1">Incident Type</p>
                                    <select
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] text-center"
                                        value={incidentType}
                                        onChange={(e) => {
                                            setIncidentType(e.target.value);
                                        }}
                                    >
                                        <option value="select">select</option>
                                        <option value="issue">issue</option>
                                        <option value="consult">consult</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                                <div className="flex flex-col bg-blue-300 p-1">
                                    <p className="text-[13px] mb-1">Business Impact</p>
                                    <select
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] text-center"
                                        value={businessImpact}
                                        onChange={(e) => {
                                            setBusinessImpact(e.target.value);
                                        }}
                                    >
                                        <option value="select">select</option>
                                        <option value="s1">S1</option>
                                        <option value="s2">S2</option>
                                        <option value="s3">S3</option>
                                        <option value="s4">S4</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className="bg-green-300 p-1">
                                    <p className="text-[13px] mb-1">Feedback Channel</p>
                                    <select
                                        className=" bg-gray-100  w-[200px] h-[20px] rounded-[4px] text-[12px] text-center"
                                        value={feedbackCh}
                                        onChange={(e) => {
                                            setFeedbackCh(e.target.value);
                                        }}
                                    >
                                        <option value="select">select</option>
                                        <option value="helpCrunch">help crunch</option>
                                        <option value="phone">phone</option>
                                        <option value="email">email</option>
                                        <option value="ticket">ticket</option>
                                        <option value="baseEmployee">base employee</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
