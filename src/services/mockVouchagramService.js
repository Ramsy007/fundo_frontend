// Mock data for brands
const mockBrands = [
    {
        BrandProductCode: "premium_subscription",
        BrandName: "Premium Subscription",
        Brandtype: "SUBSCRIPTION",
        RedemptionType: "1",
        OnlineRedemptionUrl: "#",
        BrandImage: "https://assets.leetcode.com/static_assets/public/images/premium.png",
        denominationList: "6000",
        stockAvailable: "true",
        Category: "Subscription",
        Descriptions: "Get access to premium features and exclusive content",
        tnc: "Valid for 30 days from activation",
        redeemSteps: "{\"1\":{\"text\":\"Activate on website\"}}"
    },
    {
        BrandProductCode: "leetcode_tshirt",
        BrandName: "LeetCode T-Shirt",
        Brandtype: "MERCHANDISE",
        RedemptionType: "2",
        OnlineRedemptionUrl: "#",
        BrandImage: "https://assets.leetcode.com/static_assets/public/images/tshirt.png",
        denominationList: "7200",
        stockAvailable: "true",
        Category: "Merchandise,Clothing",
        Descriptions: "Premium quality cotton t-shirt with LeetCode logo",
        tnc: "While stocks last",
        redeemSteps: "{\"1\":{\"text\":\"Redeem and provide shipping details\"}}"
    },
    {
        BrandProductCode: "leetcode_cap",
        BrandName: "LeetCode Cap",
        Brandtype: "MERCHANDISE",
        RedemptionType: "2",
        OnlineRedemptionUrl: "#",
        BrandImage: "https://assets.leetcode.com/static_assets/public/images/cap.png",
        denominationList: "6500",
        stockAvailable: "true",
        Category: "Merchandise,Accessories",
        Descriptions: "Stylish cap with embroidered LeetCode logo",
        tnc: "While stocks last",
        redeemSteps: "{\"1\":{\"text\":\"Redeem and provide shipping details\"}}"
    },
    {
        BrandProductCode: "time_travel",
        BrandName: "Time Travel Ticket",
        Brandtype: "FEATURE",
        RedemptionType: "1",
        OnlineRedemptionUrl: "#",
        BrandImage: "https://assets.leetcode.com/static_assets/public/images/timeTravel.png",
        denominationList: "70",
        stockAvailable: "true",
        Category: "Feature",
        Descriptions: "Travel back in time to finish 1 missing challenge",
        tnc: "Valid for one use",
        redeemSteps: "{\"1\":{\"text\":\"Use on any past daily challenge\"}}"
    }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockVouchagramService = {
    getToken: async () => {
        await delay(1000); // Simulate network delay
        return "mock-token-123456";
    },

    getBrands: async (token) => {
        await delay(1500); // Simulate network delay
        if (token !== "mock-token-123456") {
            throw new Error("Invalid token");
        }
        return mockBrands;
    },

    decryptResponse: async (data) => {
        await delay(500); // Simulate decryption delay
        return data; // In mock, we'll just return the data as is
    }
}; 