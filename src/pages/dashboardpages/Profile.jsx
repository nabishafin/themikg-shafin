import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Camera, Edit, ArrowLeft } from "lucide-react";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Rakib",
    email: "silvan346@gmail.com",
    phone: "3000597212",
    image: null,
    role: "Admin",
  });

  // Simulate your API calls
  const uploadFile = async (formData) => {
    // Simulate upload delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { success: true };
  };

  const refetch = async () => {
    // Simulate refetch
    console.log("Refetching user data...");
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const result = await uploadFile(formData);
      await refetch();

      toast({
        title: "Success",
        description: "Profile image updated successfully!",
      });
    } catch (error) {
      console.error("Upload failed:", error);
      toast({
        title: "Error",
        description: "Failed to update profile image",
        variant: "destructive",
      });
    } finally {
      setImageLoading(false);
    }
  };

  const handleEditProfile = () => {
    // Navigate to edit page
    console.log("Navigate to edit profile");
  };

  const handlePasswordChange = async (passwordData) => {
    try {
      // Your password change API call here
      console.log("Changing password:", passwordData);
      toast({
        title: "Success",
        description: "Password changed successfully!",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="   text-white">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Personal Information</h1>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-end mb-6">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#23769D]  text-white px-6">
                Change Password
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white">
                  Change Password
                </DialogTitle>
              </DialogHeader>
              <PasswordChangeForm
                onSubmit={handlePasswordChange}
                onCancel={() => setIsModalOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage
                      src={
                        profileData.image ||
                        "/placeholder.svg?height=128&width=128"
                      }
                    />
                    <AvatarFallback className="bg-gray-700 text-white text-2xl">
                      {profileData.name?.charAt(0) || "R"}
                    </AvatarFallback>
                  </Avatar>

                  {/* Camera Upload Button */}
                  <label className="absolute -bottom-2 -right-2 bg-[#23769D]  rounded-full p-2 cursor-pointer transition-colors">
                    {imageLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <Camera className="w-4 h-4 text-white" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={imageLoading}
                    />
                  </label>
                </div>

                <h2 className="text-xl font-semibold text-white mb-2">
                  {profileData.name || "Rakib"}
                </h2>
                <p className="text-gray-400 mb-8">
                  {profileData.role || "Admin"}
                </p>

                <Button
                  onClick={handleEditProfile}
                  className="w-full bg-[#23769D]  text-white"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Form Fields */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <div>
                <Label className="text-gray-300 text-base font-medium mb-2 block">
                  Name
                </Label>
                <Input
                  value={profileData.name || "Silvan"}
                  readOnly
                  className="bg-gray-700 border-gray-600 text-white h-12 text-base"
                />
              </div>

              <div>
                <Label className="text-gray-300 text-base font-medium mb-2 block">
                  Email
                </Label>
                <Input
                  value={profileData.email || "silvan346@gmail.com"}
                  readOnly
                  className="bg-gray-700 border-gray-600 text-white h-12 text-base"
                />
              </div>

              <div>
                <Label className="text-gray-300 text-base font-medium mb-2 block">
                  Phone Number
                </Label>
                <div className="flex">
                  <div className="flex items-center bg-gray-700 border border-gray-600 border-r-0 rounded-l-md px-3">
                    <span className="text-white mr-2">🇺🇸</span>
                    <span className="text-gray-300">+1242</span>
                  </div>
                  <Input
                    value={profileData.phone || "3000597212"}
                    readOnly
                    className="bg-gray-700 border-gray-600 text-white h-12 text-base rounded-l-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Password Change Form Component
const PasswordChangeForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match",
        variant: "destructive",
      });
      return;
    }

    if (formData.newPassword.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    onSubmit(formData);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      <div>
        <Label htmlFor="current-password" className="text-gray-300">
          Current Password
        </Label>
        <Input
          id="current-password"
          type="password"
          value={formData.currentPassword}
          onChange={(e) => handleChange("currentPassword", e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          required
        />
      </div>
      <div>
        <Label htmlFor="new-password" className="text-gray-300">
          New Password
        </Label>
        <Input
          id="new-password"
          type="password"
          value={formData.newPassword}
          onChange={(e) => handleChange("newPassword", e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          required
        />
      </div>
      <div>
        <Label htmlFor="confirm-password" className="text-gray-300">
          Confirm Password
        </Label>
        <Input
          id="confirm-password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          required
        />
      </div>
      <div className="flex justify-end gap-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-gray-600 bg-black text-gray-300 "
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-[#23769D] ">
          Update Password
        </Button>
      </div>
    </form>
  );
};

export default Profile;
