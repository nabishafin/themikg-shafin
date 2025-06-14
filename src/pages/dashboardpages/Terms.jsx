import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Save } from "lucide-react";
import { useState } from "react";

const Terms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedContent, setEditedContent] = useState({
    introduction:
      'Welcome to [Your Website/App Name] ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website [Your Website URL] and related services.',
    informationWeCollect: [
      "Personal Information: Name, email address, phone number, payment details, etc.",
      "Account Information: Username, password, profile details, etc.",
      "Usage Data: IP address, browser type, pages visited, time spent on pages, etc.",
      "Cookies & Tracking Technologies: We use cookies to enhance user experience and track interactions.",
    ],
    howWeUse: [
      "Provide and improve our services.",
      "Process transactions and payments.",
      "Communicate with you regarding support, promotions, or updates.",
      "Personalize user experience.",
      "Ensure security and prevent fraud.",
      "Comply with legal obligations.",
    ],
    sharingDisclosure: [
      "Service Providers: Third-party vendors for payment processing, hosting, analytics, etc.",
      "Legal Authorities: If required by law or to protect our rights.",
    ],
  });

  const handleSave = () => {
    // Here you would typically save to a database or API
    console.log("Saving terms:", editedContent);
    setIsOpen(false);
  };

  return (
    <div className=" text-white ">
      <div className="">
        {/* Header */}
        <div className="bg-[#8794A5] rounded-t-lg px-6 py-4 mb-0">
          <h1 className="text-xl font-semibold">Terms & Condition</h1>
        </div>

        {/* Content */}
        <div className="bg-blackrounded-b-lg p-6 relative">
          <div className="space-y-6">
            {/* Introduction */}
            <section>
              <h2 className="text-lg font-semibold mb-3">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                {editedContent.introduction}
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-lg font-semibold mb-3">
                2. Information We Collect
              </h2>
              <p className="text-gray-300 mb-3">
                We may collect the following types of information:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {editedContent.informationWeCollect.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-lg font-semibold mb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-3">
                We may use the collected information to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {editedContent.howWeUse.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Sharing & Disclosure */}
            <section>
              <h2 className="text-lg font-semibold mb-3">
                4. Sharing & Disclosure of Information
              </h2>
              <p className="text-gray-300 mb-3">
                We do not sell your personal data. However, we may share
                information with:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                {editedContent.sharingDisclosure.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Edit Button with Modal */}
          <div className="absolute bottom-6 right-6">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#23769D] hover:bg-[#4e7f96] text-white px-4 py-2 rounded-md flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Terms and Conditions
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-black text-white border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-white">
                    Edit Terms and Conditions
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Introduction Section */}
                  <div>
                    <Label
                      htmlFor="introduction"
                      className="text-sm font-medium text-gray-300"
                    >
                      1. Introduction
                    </Label>
                    <Textarea
                      id="introduction"
                      value={editedContent.introduction}
                      onChange={(e) =>
                        setEditedContent({
                          ...editedContent,
                          introduction: e.target.value,
                        })
                      }
                      className="mt-2 bg-gray-700 border-gray-600 text-white min-h-[100px]"
                      placeholder="Enter introduction text..."
                    />
                  </div>

                  {/* Information We Collect */}
                  <div>
                    <Label className="text-sm font-medium text-gray-300">
                      2. Information We Collect
                    </Label>
                    <div className="space-y-2 mt-2">
                      {editedContent.informationWeCollect.map((item, index) => (
                        <Input
                          key={index}
                          value={item}
                          onChange={(e) => {
                            const newItems = [
                              ...editedContent.informationWeCollect,
                            ];
                            newItems[index] = e.target.value;
                            setEditedContent({
                              ...editedContent,
                              informationWeCollect: newItems,
                            });
                          }}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder={`Information item ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* How We Use Your Information */}
                  <div>
                    <Label className="text-sm font-medium text-gray-300">
                      3. How We Use Your Information
                    </Label>
                    <div className="space-y-2 mt-2">
                      {editedContent.howWeUse.map((item, index) => (
                        <Input
                          key={index}
                          value={item}
                          onChange={(e) => {
                            const newItems = [...editedContent.howWeUse];
                            newItems[index] = e.target.value;
                            setEditedContent({
                              ...editedContent,
                              howWeUse: newItems,
                            });
                          }}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder={`Usage item ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sharing & Disclosure */}
                  <div>
                    <Label className="text-sm font-medium text-gray-300">
                      4. Sharing & Disclosure of Information
                    </Label>
                    <div className="space-y-2 mt-2">
                      {editedContent.sharingDisclosure.map((item, index) => (
                        <Input
                          key={index}
                          value={item}
                          onChange={(e) => {
                            const newItems = [
                              ...editedContent.sharingDisclosure,
                            ];
                            newItems[index] = e.target.value;
                            setEditedContent({
                              ...editedContent,
                              sharingDisclosure: newItems,
                            });
                          }}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder={`Sharing item ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-700">
                    <Button
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="border-gray-600 text-gray-300 bg-black hover:bg-gray-700"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSave}
                      className="bg-[#23769D] hover:bg-[#4e7f96] text-white flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
