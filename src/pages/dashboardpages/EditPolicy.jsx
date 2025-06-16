import React, { useState } from "react";
import {
  ArrowLeft,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Type,
  Paintbrush,
  Smile,
  Link,
  Copy,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Indent,
  Outdent,
} from "lucide-react";

const EditPolicy = () => {
  const [content, setContent] = useState(`1. Introduction
        Welcome to [Your Website/App Name] ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website [Your Website URL] and related services.
        
        2. Information We Collect
        We may collect the following types of information:
        • Personal Information: Name, email address, phone number, payment details, etc.
        • Account Information: Username, password, profile details, etc.
        • Usage Data: IP address, browser type, pages visited, time spent on pages, etc.
        • Cookies & Tracking Technologies: We use cookies to enhance user experience and track interactions.
        
        3. How We Use Your Information
        We may use the collected information to:
        • Provide and improve our services.
        • Process transactions and payments.
        • Communicate with you regarding support, promotions, or updates.
        • Personalize user experience.
        • Ensure security and prevent fraud.
        • Comply with legal obligations.
        
        4. Sharing & Disclosure of Information
        We do not sell your personal data. However, we may share information with:`);

  const toolbarButtons = [
    { icon: Bold, label: "Bold", action: "bold" },
    { icon: Italic, label: "Italic", action: "italic" },
    { icon: Underline, label: "Underline", action: "underline" },
    { icon: Strikethrough, label: "Strikethrough", action: "strikethrough" },
    { icon: Type, label: "Font", action: "font" },
    { icon: Paintbrush, label: "Color", action: "color" },
    { icon: Smile, label: "Emoji", action: "emoji" },
    { icon: Link, label: "Link", action: "link" },
    { icon: Copy, label: "Copy", action: "copy" },
    { icon: Undo, label: "Undo", action: "undo" },
    { icon: Redo, label: "Redo", action: "redo" },
    { icon: AlignLeft, label: "Align Left", action: "alignLeft" },
    { icon: AlignCenter, label: "Align Center", action: "alignCenter" },
    { icon: AlignRight, label: "Align Right", action: "alignRight" },
    { icon: List, label: "Bullet List", action: "bulletList" },
    { icon: ListOrdered, label: "Numbered List", action: "numberedList" },
    { icon: Indent, label: "Indent", action: "indent" },
    { icon: Outdent, label: "Outdent", action: "outdent" },
  ];

  const handleToolbarAction = (action) => {
    // Handle different toolbar actions
    console.log(`Action: ${action}`);
    // You can implement specific formatting logic here
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpdate = () => {
    console.log("Content updated:", content);
    // Handle update logic here
  };
  return (
    <div className=" bg-[#222222] text-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-700">
        <ArrowLeft className="w-6 h-6 mr-3 cursor-pointer hover:text-blue-400 transition-colors" />
        <h1 className="text-lg font-medium">Edit Privacy Policy</h1>
      </div>

      {/* Toolbar */}
      <div className="bg-black p-3 ml-7 rounded-lg mt-4 border-b border-gray-700">
        <div className="flex flex-wrap gap-2">
          {toolbarButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleToolbarAction(button.action)}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title={button.label}
            >
              <button.icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Content Editor */}
      <div className="flex-1 p-6">
        <div className="bg-black rounded-lg border border-gray-700">
          <textarea
            value={content}
            onChange={handleContentChange}
            className="w-full h-[530px] p-4 bg-transparent text-white resize-none outline-none placeholder-gray-400"
            placeholder="Start typing your terms and conditions..."
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          />
        </div>
      </div>

      {/* Update Button */}
      <div className="p-6 flex justify-center">
        <button
          onClick={handleUpdate}
          className="bg-[#23769D]  text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPolicy;
