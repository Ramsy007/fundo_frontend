import axios from "axios";


// Get environment variables
// const API_URL = "http://52.66.192.14:8006/api";
const API_URL = "http://localhost:8006/api";

console.log("API_URL", API_URL);

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for logging
api.interceptors.request.use((config) => {
  console.log("API Request:", {
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data,
  });
  return config;
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log("API Response:", {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("API Error:", {
      status: error.response?.status,
      data: error.response?.data,
      request: {
        url: error.config?.url,
        method: error.config?.method,
        data: error.config?.data,
        headers: error.config?.headers,
      },
    });
    return Promise.reject(error);
  }
);

// Auth related API calls
export const authAPI = {
  sendOTP: async (data) => {
    try {
      // Format data according to API requirements
      const formattedData = {
        PAN: data.PAN.trim().toUpperCase(),
        phone_number: data.phone_number.trim(),
        lat: data.lat,
        lng: data.lng,
      };

      console.log("Sending OTP request with data:", formattedData);
      const response = await api.post("/user/send-otp", formattedData);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response?.data?.message);
      }
    } catch (error) {
      console.log("error-------->", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  verifyOTP: async (data) => {
    try {
      const response = await api.post("/user/verify-otp", data);
      return response.data;
    } catch (error) {
      console.error("Verify OTP Error:", error.response?.data);
      throw error;
    }
  },

  resendOTP: async (data) => {
    try {
      const formattedData = {
        PAN: data.PAN.trim().toUpperCase(),
        phone_number: data.phone_number.trim(),
      };
      const response = await api.post("/user/send-otp", formattedData);
      return response.data;
    } catch (error) {
      console.error("Resend OTP Error:", error.response?.data);
      throw error;
    }
  },
};

// User related API calls (non-authentication)
export const userAPI = {
  initiateKYC: async (data) => {
    try {
      console.log("Initiating KYC with data:", data);
      const response = await api.post("/user/initiate-kyc", data);
      console.log("KYC Initiation Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("KYC Initiation Error:", error);
      throw error;
    }
  },

  submitAadharOTP: async (data) => {
    try {
      console.log("Submitting Aadhar OTP with data:", data);
      const response = await api.post("/user/submit-aadhar-otp", data);
      console.log("Aadhar OTP Submission Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Aadhar OTP Submission Error:", error);
      throw error;
    }
  },

  getJourney: async () => {
    try {
      console.log("Getting user journey");
      const response = await api.get("/user/get-journey");
      console.log("Journey Response:", response.data);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("authToken");
        window.location.href = "/";
      }
      console.error("Get Journey Error:", error);
      throw error;
    }
  },

  addEmployment: async (data) => {
    try {

      console.log("Adding employment status with data:", data);
      const response = await api.post("/user/add-employement", data);
      console.log("Employment Status Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Add Employment Error:", error);
      throw error;
    }
  },

  sendEmailOTP: async (data) => {
    try {
      console.log("Sending email OTP with data:", data);
      const response = await api.post("/user/send-email-otp", data);
      console.log("Email OTP Raw Response:", response);

      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      console.log("Email OTP Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Email OTP Error Details:", {
        message: error.message,
        response: error.response,
        status: error.response?.status
      });
      throw error;
    }
  },

  resendEmailOTP: async (data) => {
    try {
      console.log("Resending email OTP with data:", data);
      const formattedData = {
        office_email: data.office_email.trim(),
        personal_email: data.personal_email.trim(),
      };
      const response = await api.post("/user/send-email-otp", formattedData);
      console.log("Resend Email OTP Response:", response.data);

      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      return response.data;
    } catch (error) {
      console.error("Resend Email OTP Error:", error);
      throw error;
    }
  },

  verifyEmailOTP: async (data) => {
    try {
      console.log("Verifying email OTP with data:", data);
      const response = await api.post("/user/verify-email-otp", data);
      console.log("Email OTP Verification Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Email OTP Verification Error:", error);
      throw error;
    }
  },

  previewSanction: async () => {
    try {
      console.log("Requesting sanction letter preview...");
      const response = await api.post("/user/preview-sanction");
      console.log("Preview Sanction Response:", response);
      return response;
    } catch (error) {
      console.error("Preview Sanction Error:", error);
      throw error;
    }
  },

  checkDisbursalStatus: async () => {
    try {
      console.log("Checking disbursal status...");
      const response = await api.get("/user/check-disbursal-status");
      console.log("Disbursal status response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error checking disbursal status:", error);
      throw error;
    }
  },

  getRedirectUrl: async () => {
    try {
      console.log("Fetching redirect URL...");
      const response = await api.post(
        "/user/redirect-url",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Redirect URL response:", response);
      return response;
    } catch (error) {
      console.error("Error fetching redirect URL:", error);
      throw error;
    }
  },

  disbursed: async () => {
    try {
      console.log("Processing disbursal...");
      const response = await api.post("/user/disbursed");
      console.log("Disbursal response:", response);
      return response;
    } catch (error) {
      console.error("Error processing disbursal:", error);
      throw error;
    }
  },

  getLoanStatus: async () => {
    try {
      console.log("Requesting loan status...");
      const response = await api.get("/user/loan-status");
      console.log("Loan status response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting loan status:", error);
      throw error;
    }
  },

  getESignData: async () => {
    try {
      console.log("Requesting loan status...");
      const response = await api.get("/user/loan-details");
      console.log("Loan status response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting loan status:", error);
      throw error;
    }
  },

  getProfile: async () => {
    try {
      console.log("Requesting user profile...");

      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log("Profile response:", response);
      return response;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },

  requestLoan: async (data) => {
    try {
      console.log("Requesting loan with data:", data);
      const response = await api.post("/user/request-loan", data);
      console.log("Request Loan Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Request Loan Error:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      console.log("Logging out user...");
      const response = await axios.post(
        `${API_URL}/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("Logout response:", response);
      return response;
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  },

  uploadBankStatement: async (file) => {
    try {
      console.log("Uploading bank statement...");
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/user/upload-bank-statement", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("respone-------->", response);
      console.log("Bank Statement Upload Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Bank Statement Upload Error:", error);
      // Pass through the backend error message
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  contactUs: async (data) => {
    try {
      const response = await api.post("/user/contact-us", data);
      return response.data;
    } catch (error) {
      console.error("Contact Us Error:", error);
      const message =
        error?.response?.data?.error ||
        "Something went wrong. Please try again.";
      throw new Error(message);
    }
  },

  getCongratulationData: async () => {
    try {
      console.log("Requesting congratulation page data...");
      const response = await api.get("/user/congratulation-page");
      console.log("Congratulation page response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting congratulation data:", error);
      throw error;
    }
  },

  submitFeedback: async (data) => {
    try {
      const response = await api.post("/user/submit-feedback", data);
      console.log("Feedback submitted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error submitting feedback:", error);
      throw error;
    }
  },

  addReference: async (data) => {
    try {
      const response = await api.post("/user/add-reference", data);
      console.log("Reference added successfully:", response.data);
      return response.data;
    } catch (error) {
      console.log("Error adding reference:", error);
      throw error;
    }
  },


};

export default api;
